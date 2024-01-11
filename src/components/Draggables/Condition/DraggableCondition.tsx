import { useSelector } from "react-redux";
import { getCCValue } from "../../../data/ccskills";
import { selectTicks } from "../../../state/ccSlice";
import Draggable, { DraggableBaseProps } from "../Draggable";
import TickHandling from "../TickHandling";
import Condition, { ConditionTypes } from "./Condition";

export interface DraggableConditionProps extends DraggableBaseProps {
  gw2id: ConditionTypes;
}

export default function DraggableCondition({
  id,
  gw2id,
  inArmory = false,
}: DraggableConditionProps) {
  const basecc = getCCValue("Condition", gw2id);
  const duration = useSelector(selectTicks(id));

  const cc = basecc * duration;

  return (
    <Draggable
      id={id}
      inArmory={inArmory}
      cc={cc}
      moreIcons={(showIcons) => <TickHandling id={id} showIcons={showIcons} />}
    >
      <Condition gw2id={gw2id} id={id} inArmory={inArmory} />
    </Draggable>
  );
}
