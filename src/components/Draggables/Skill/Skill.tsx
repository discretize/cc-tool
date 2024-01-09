import { Skill as Gw2Skill } from "@discretize/gw2-ui-new";
import { CC_SKILLS } from "../../../data/ccskills";
import { DraggableBaseProps } from "../Draggable";
import classes from "../Draggable.module.css";

export interface SkillProps extends Omit<DraggableBaseProps, "id"> {
  gw2id: number;
}

export default function Skill({ gw2id }: SkillProps) {
  const cc = CC_SKILLS[gw2id];

  return (
    <span
      className={classes.inner}
      style={{
        backgroundColor: `var(--gw2-color-${cc.profession.toLowerCase()}-dark)`,
        border: `1px solid var(--gw2-color-${cc.profession.toLowerCase()}-main)`,
      }}
    >
      <Gw2Skill
        id={gw2id}
        disableLink
        disableText
        style={{ fontSize: "20px", lineHeight: 0 }}
      />
      <span className={classes.ccText}>{cc.value}</span>
    </span>
  );
}
