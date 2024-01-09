import Condition, { ConditionTypes } from "./Condition/Condition";
import { DraggableBaseProps } from "./Draggable";
import DraggableCondition from "./Condition/DraggableCondition";
import DraggableSkill from "./Skill/DraggableSkill";
import Skill from "./Skill/Skill";

export interface DraggableGenericProps extends DraggableBaseProps {
  gw2id: unknown;
  type: "Skill" | "Condition";
}

export function DraggableGeneric(props: DraggableGenericProps) {
  if (props.type === "Skill") {
    const id = parseInt(props.gw2id as string);
    return <DraggableSkill {...props} gw2id={id} />;
  } else if (props.type === "Condition") {
    const id = props.gw2id as ConditionTypes;
    return <DraggableCondition {...props} gw2id={id} />;
  }
}

export function Generic(props: DraggableGenericProps) {
  if (props.type === "Skill") {
    const id = parseInt(props.gw2id as string);
    return <Skill {...props} gw2id={id} />;
  } else if (props.type === "Condition") {
    const id = props.gw2id as ConditionTypes;
    return <Condition {...props} gw2id={id} />;
  }
}
