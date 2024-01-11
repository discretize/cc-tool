import { DraggableTypes } from "../components/Draggables/Draggable";
import { presets } from "../data/presets";
import { CCState } from "../state/ccSlice";
import { SettingsState } from "../state/settingsSlice";
import { RootState } from "../state/store";
import { generateRandomString } from "./utils";

const mapping: Record<string, string> = {
  Skill: "S",
  Condition: "C",
};

export function getShareLink(state: RootState) {
  let link = state.settings.preset + "\n";

  for (const phase of presets[state.settings.preset].map((p) => p.id)) {
    if (!Object.keys(state.cc.skills).includes(phase)) {
      link += "\n";
      continue;
    }

    for (const skill of state.cc.skills[phase]) {
      link += mapping[skill.type] + ":" + skill.gw2id;

      const tick = state.cc.ticks[skill.id];
      if (tick) {
        link += ":" + tick;
      }
      link += ",";
    }

    // remove last comma
    link = link.replace(/,$/, "");
    link += "\n";
  }

  // base64 encode
  return btoa(link);
}

export function getState(b64state: string) {
  const decoded = atob(b64state);
  const lines = decoded.split("\n");
  const preset = lines[0];
  const settings: SettingsState = {
    preset,
    professions: [],
  };
  const cc: CCState = {
    skills: {},
    ticks: {},
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    if (!line) {
      continue;
    }
    const bar = presets[preset][i - 1];
    cc.skills[bar.id] = [];

    const skillsInBar = line.split(",");

    for (const skill of skillsInBar) {
      const [typeRaw, gw2id, tickStr] = skill.split(":");

      const type = Object.keys(mapping).find((k) => mapping[k] === typeRaw) as
        | DraggableTypes
        | undefined;
      if (!type) {
        continue;
      }
      const tick = tickStr ? parseInt(tickStr) : 0;

      const id = type + "-" + gw2id + "-" + generateRandomString(10);

      cc.skills[bar.id].push({ id, type, gw2id });
      cc.ticks[id] = tick;
    }
  }

  return { settings, cc };
}
