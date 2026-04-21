const STRAPI = "http://127.0.0.1:1337/api";
const TOKEN = "";

const DD = "https://ddragon.leagueoflegends.com";
const BASE = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/pt_br/v1";
const CDN = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default";

async function fetchJson(url) {
  return fetch(url).then(r => r.json());
}

async function uploadImage(iconPath, fileName) {
  const cleanPath = iconPath.replace(/^\/lol-game-data\/assets/i, "");
  const url = `${CDN}${cleanPath}`.toLowerCase();
  try {
    const imageRes = await fetch(url);
    if (!imageRes.ok) {
      console.error(`  ❌ imagem não encontrada (${imageRes.status}):`, url);
      return null;
    }

    const buffer = await imageRes.arrayBuffer();
    const form = new FormData();
    form.append("files", new Blob([buffer]), fileName);

    const res = await fetch(`${STRAPI}/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}` },
      body: form,
    });

    const json = await res.json();
    if (!res.ok) {
      console.error("  ❌ erro no upload:", json);
      return null;
    }

    return json[0]?.id || null;
  } catch (err) {
    console.error("  ❌ uploadImage exception:", err.message);
    return null;
  }
}

async function findOne(endpoint, riotid) {
  const res = await fetch(
    `${STRAPI}/${endpoint}?filters[riotid][$eq]=${riotid}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
  const json = await res.json();
  return json.data?.[0] || null;
}

async function upsert(endpoint, riotid, payload) {
  const existing = await findOne(endpoint, riotid);

  if (existing) {
    const docId = existing.documentId || existing.id;
    const res = await fetch(`${STRAPI}/${endpoint}/${docId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ data: payload }),
    });
    const json = await res.json();
    if (!res.ok) console.error("❌ ERRO UPDATE:", endpoint, riotid, json);
    else console.log("  ✔ atualizado:", riotid);
  } else {
    const res = await fetch(`${STRAPI}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ data: payload }),
    });
    const json = await res.json();
    if (!res.ok) console.error("❌ ERRO CREATE:", endpoint, riotid, json);
    else console.log("  ✔ criado:", riotid);
  }
}

async function run() {
  console.log("INICIO");

  const perksRaw = await fetchJson(`${BASE}/perks.json`);
  const stylesRaw = await fetchJson(`${BASE}/perkstyles.json`);

  const perks = Array.isArray(perksRaw) ? perksRaw : Object.values(perksRaw);
  const styles = stylesRaw.styles || [];
  const perksMap = Object.fromEntries(perks.map(p => [p.id, p]));

  for (const style of styles) {
    if (!style.id || !style.name) continue;

    console.log("\nSTYLE:", style.name, `(${style.id})`);

    const iconId = await uploadImage(style.iconPath, `style_${style.id}.png`);
    await upsert("rune-styles", String(style.id), {
      riotid: String(style.id),
      name: style.name,
      icon: iconId,
    });

    for (const slot of style.slots) {
      for (const perkId of slot.perks) {
        const perk = perksMap[perkId];
        if (!perk) continue;

        console.log("  PERK:", perk.name, `(${perk.id})`);

        const perkIconId = await uploadImage(perk.iconPath, `perk_${perk.id}.png`);
        await upsert("rune-perks", String(perk.id), {
          riotid: String(perk.id),
          name: perk.name,
          description: perk.shortDesc,
          icon: perkIconId,
        });
      }
    }
  }

  console.log("\nFINALIZADO");
}

run();
