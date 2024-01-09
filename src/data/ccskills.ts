import { Condition } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { DraggableTypes } from "../components/Draggables/Draggable";

export type CCData = { value: number; profession: string };

export const CC_SKILLS: Record<number, CCData> = {
  9093: { value: 300, profession: "Guardian" }, // bane signet
  9147: { value: 150, profession: "Guardian" }, // binding blade
  9124: { value: 232, profession: "Guardian" }, // banish

  30713: { value: 100, profession: "Engineer" }, // thunderclap

  12511: { value: 150, profession: "Ranger" }, // point blank
  12638: { value: 150, profession: "Ranger" }, // point blank
};

// @ts-expect-error not all skills inflict cc
export const CC_CONDITIONS: Record<
  ComponentProps<typeof Condition>["name"],
  Omit<CCData, "profession">
> = {
  Fear: { value: 100 },
  Taunt: { value: 75 },
  Immobile: { value: 50 },
  Slow: { value: 50 },
  Chilled: { value: 33 },
  Blinded: { value: 20 },
  Weakness: { value: 20 },
  Crippled: { value: 20 },
};

export const getCCValue = (type: DraggableTypes, gw2id: unknown) => {
  switch (type) {
    case "Skill":
      return CC_SKILLS[gw2id as number]?.value ?? 0;
    case "Condition":
      return (
        CC_CONDITIONS[gw2id as ComponentProps<typeof Condition>["name"]]
          ?.value ?? 0
      );
  }
};
