import { Condition } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";

export const CC_SKILLS: Record<number, { value: number; profession: string }> =
  {
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
  { value: number }
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
