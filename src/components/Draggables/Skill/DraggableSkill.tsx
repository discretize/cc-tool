import { CC_SKILLS } from "../../../data/ccskills";
import Draggable, { DraggableBaseProps } from "../Draggable";
import Skill from "./Skill";

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
      <Skill gw2id={gw2id} inArmory={inArmory} />
    </Draggable>
  );
}
