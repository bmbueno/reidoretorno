const STRAPI_URL = "http://localhost:1337/api/items";
const TOKEN = ""; //

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

      const payload = {
        name: item.name,
        riotkey: id,
        plaintext: item.plaintext,
        version: version,
      };

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

        if (existingItem) {
          const currentVersion = existingItem.attributes.version;

          if (currentVersion === version) {
            console.log("Sem mudança:", item.name);
            continue;
          }

          await fetch(`${STRAPI_URL}/${existingItem.id}`, {
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