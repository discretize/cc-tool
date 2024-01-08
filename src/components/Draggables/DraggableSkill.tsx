import { Skill } from "@discretize/gw2-ui-new";
import { CC_SKILLS } from "../../data/ccskills";
import Draggable, { DraggableBaseProps } from "./Draggable";
import classes from "./Draggable.module.css";

export interface DraggableSkillProps extends DraggableBaseProps {
  gw2id: number;
}

export default function DraggableSkill({
  id,
  gw2id,
  inArmory = false,
}: DraggableSkillProps) {
  const cc = CC_SKILLS[gw2id];

  return (
    <Draggable id={id} inArmory={inArmory} cc={cc.value}>
      <span
        className={classes.inner}
        style={{
          backgroundColor: `var(--gw2-color-${cc.profession.toLowerCase()}-dark)`,
          border: `1px solid var(--gw2-color-${cc.profession.toLowerCase()}-main)`,
        }}
      >
        <Skill
          id={gw2id}
          disableLink
          disableText
          style={{ fontSize: "20px", lineHeight: 0 }}
        />
        <span className={classes.ccText}>{cc.value}</span>
      </span>
    </Draggable>
  );
}
