import fs from "fs";
import resolve from "./map-gw2-ids.js";

const missing = "missing.txt";
const full = "skills-resolved-full.json";

export const SPECIALIZATIONS = {
  Willbender: "Guardian",
  Firebrand: "Guardian",
  Dragonhunter: "Guardian",
  Bladesworn: "Warrior",
  Spellbreaker: "Warrior",
  Berserker: "Warrior",
  Vindicator: "Revenant",
  Renegade: "Revenant",
  Herald: "Revenant",
  Specter: "Thief",
  Deadeye: "Thief",
  Daredevil: "Thief",
  Harbinger: "Necromancer",
  Scourge: "Necromancer",
  Reaper: "Necromancer",
  Mechanist: "Engineer",
  Holosmith: "Engineer",
  Scrapper: "Engineer",
  Virtuoso: "Mesmer",
  Mirage: "Mesmer",
  Chronomancer: "Mesmer",
  Untamed: "Ranger",
  Soulbeast: "Ranger",
  Druid: "Ranger",
  Catalyst: "Elementalist",
  Weaver: "Elementalist",
  Tempest: "Elementalist",
};

// read skills.txt
const skills = fs.readFileSync("skills.txt", "utf8").split("\n");

console.log("Read skills.txt", skills.length);
fs.appendFileSync("skills-resolved.txt", `{\n`);
fs.appendFileSync(full, `{\n`);

for (const line of skills) {
  if (line === "") continue;

  const split = line.split(".png");

  const specialization = split[0].replace(" icon small", "");
  const profession = (
    SPECIALIZATIONS[specialization]
      ? SPECIALIZATIONS[specialization]
      : specialization
  ).toLowerCase();

  const name = split[2].split("—")[0].split(",")[0].trim();

  const cc = parseInt(
    split[2]
      .split("—")[1]
      .split("Defiance Break: ")[1]
      .replace("(in PvE)", "")
      .trim()
  );

  const resolved = resolve("Skill", { name, profession });

  if (resolved === undefined || resolved.id === undefined) {
    fs.appendFileSync(missing, `${line}\n`);
    continue;
  } else {
    fs.appendFileSync(
      "skills-resolved.txt",
      `${resolved.id}: ${JSON.stringify({ ...resolved, cc })},\n`
    );
  }

  // download from api
  const url = `https://api.guildwars2.com/v2/skills/${resolved.id}?lang=en`;

  setTimeout(() => {}, 500);
  const result = await fetch(url);
  const json = await result.json();

  fs.appendFileSync(full, `"${resolved.id}": ${JSON.stringify(json)},\n`);
}
fs.appendFileSync("skills-resolved.txt", `}\n`);
fs.appendFileSync(full, `},\n`);
