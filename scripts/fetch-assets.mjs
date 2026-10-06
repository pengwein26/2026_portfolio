// Downloads the exact Figma exports into public/assets.
// Figma's MCP asset links expire ~7 days after export (exported Sep 15, 2026).
// If they've expired, re-export from Figma using the same file names.
import { writeFile, mkdir } from "node:fs/promises";

const base = "https://www.figma.com/api/mcp/asset/";
const assets = {
  "portrait.png": "4529b826-86b2-4daf-ac27-ba5877d4f778.png",       // 73:350
  "tinder-1.png": "f792c42d-1959-448c-b478-43a56daf194e.png",       // image 97
  "tinder-2.png": "28fdb165-7139-4893-b7de-1a3366347da2.png",       // image 98
  "pact.png": "e3214bb1-914f-40cd-9bda-afbff136fd90.png",           // pacttt 1
  "jw-permissions.png": "2d32b615-8f75-4b02-9f1a-677d4f5aa4d0.png", // profile -> preview
  "jw-directory-2.png": "a175f772-41a0-473c-8abe-43b76f0e3d0d.png", // Screen Rec 2.06
  "jw-directory-1.png": "629561e7-870c-4fa2-bac2-096754749268.png", // Screen Rec 1.30
  "pinterest.png": "976a4529-015a-47c1-a1e7-e6c28bf0c7fa.png",      // pinterest gif 4
  "cg-home.png": "37c2bbc6-b886-42a6-8348-8ac109e7ce41.png",
  "cg-leaderboard.png": "41769718-840b-4411-976d-92df4f19906a.png",
  "logo-mark.svg": "83bff28e-f1e8-40b3-bf64-0016bfc4cf8a.svg",      // 73:337
  "doodle-right-1.svg": "df2feb87-3a6c-46e0-96b3-fff51c8c4cff.svg",   // 73:352
  "doodle-right-2.svg": "3edcfeb1-7d3d-44d6-a0ca-27e88387f0dc.svg",   // 73:353
  "doodle-top.svg": "095ae7d2-39dc-44f8-bd7c-b50aaf9e4513.svg",       // 73:354
  "dots.svg": "e89cdbf4-407b-4ef2-91d1-049fa26603dd.svg",             // 73:358
};

await mkdir("public/assets", { recursive: true });
for (const [name, id] of Object.entries(assets)) {
  const res = await fetch(base + id);
  if (!res.ok) {
    console.error(`✗ ${name} (${res.status}) — re-export from Figma`);
    continue;
  }
  await writeFile(`public/assets/${name}`, Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${name}`);
}
