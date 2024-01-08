import { DraggableBaseProps } from "./Draggable";
import DraggableCondition, { ConditionTypes } from "./DraggableCondition";
import DraggableSkill from "./DraggableSkill";

export interface DraggableGenericProps extends DraggableBaseProps {
  gw2id: unknown;
  type: "Skill" | "Condition";
}

export default function DraggableGeneric(props: DraggableGenericProps) {
  console.log(props);

  if (props.type === "Skill") {
    const id = parseInt(props.gw2id as string);
    return <DraggableSkill {...props} gw2id={id} />;
  } else if (props.type === "Condition") {
    const id = props.gw2id as ConditionTypes;
    return <DraggableCondition {...props} gw2id={id} />;
  }
}
