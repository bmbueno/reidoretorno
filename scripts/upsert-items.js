const STRAPI_URL = "http://localhost:1337/api/items";
const TOKEN = ""; //


async function uploadImageToStrapi(imageUrl, fileName) {
  const imageBuffer = await fetch(imageUrl).then(r => r.arrayBuffer());
  const baseUrl = new URL(STRAPI_URL).origin;

  const formData = new FormData();
  formData.append("files", new Blob([imageBuffer]), fileName);

  const res = await fetch(`${baseUrl}/api/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  });

  const json = await res.json();
  return json[0]?.id;
}

async function run() {
  try {
    const versions = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    ).then(r => r.json());

    const version = versions[0];
    console.log("Versão:", version);

    const data = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/item.json`
    ).then(r => r.json());

    const items = Object.entries(data.data);

    for (const [idRaw, item] of items) {
      const id = String(idRaw);

      if (!item.gold?.purchasable) continue;
      if (!item.maps?.["11"]) continue;

      const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${id}.png`;

      try {
        const existingRes = await fetch(
          `${STRAPI_URL}?filters[riotkey][$eq]=${id}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );

        const existingJson = await existingRes.json();
        const existingItem = existingJson.data?.[0];

        let imageId = null;

        // 🔥 só faz upload se for novo ou versão mudou
        if (!existingItem || existingItem.version !== version) {
          imageId = await uploadImageToStrapi(
            imageUrl,
            `${item.image.full}`
          );
        }

        const payload = {
          name: item.name,
          riotkey: id,
          plaintext: item.plaintext,
          version: version,
          image: imageId,
        };

        if (existingItem) {
          const currentVersion = existingItem.version;

          if (currentVersion === version) {
            console.log("Sem mudança:", item.name);
            continue;
          }

          await fetch(`${STRAPI_URL}/${existingItem.documentId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({ data: payload }),
          });

          console.log("Atualizado:", item.name);
        } else {
          await fetch(STRAPI_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({ data: payload }),
          });

          console.log("Criado:", item.name);
        }
      } catch (err) {
        console.error("Erro no item:", id, err);
      }
    }

    console.log("Finalizado");
  } catch (err) {
    console.error("Erro geral:", err);
  }
}

run();