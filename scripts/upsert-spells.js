const STRAPI_URL = "http://127.0.0.1:1337";
const TOKEN = ""; //

async function uploadImage(buffer, filename) {
  const formData = new FormData();
  formData.append("files", new Blob([buffer]), filename);

  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  });

  const json = await res.json();
  return json[0];
}

async function run() {
  try {
    const versions = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    ).then(r => r.json());

    const version = versions[0];
    console.log("Versão:", version);

    const data = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/summoner.json`
    ).then(r => r.json());

    const spells = Object.values(data.data);

    for (const spell of spells) {
      const riotId = spell.id;

      const payloadBase = {
        name: spell.name,
        riotid: riotId,
        description: spell.description,
        active: true, // ✔ adicionado
      };

      try {
        const existingRes = await fetch(
          `${STRAPI_URL}/api/spells?filters[riotid][$eq]=${riotId}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );

        const existingJson = await existingRes.json();
        const existingItem = existingJson.data?.[0];

        let imageId = null;

        // upload imagem só se não existir
        if (!existingItem) {
          const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`;

          const imageRes = await fetch(imageUrl);
          const buffer = await imageRes.arrayBuffer();

          const uploaded = await uploadImage(buffer, spell.image.full);
          imageId = uploaded.id;
        }

        const payload = {
          ...payloadBase,
          ...(imageId && { image: imageId }), // ✔ corrigido
        };

        if (existingItem) {
          await fetch(`${STRAPI_URL}/api/spells/${existingItem.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({ data: payload }),
          });

          console.log("Atualizado:", spell.name);
        } else {
          await fetch(`${STRAPI_URL}/api/spells`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({ data: payload }),
          });

          console.log("Criado:", spell.name);
        }
      } catch (err) {
        console.error("Erro:", spell.name, err);
      }
    }

    console.log("Finalizado");
  } catch (err) {
    console.error("Erro geral:", err);
  }
}

run();