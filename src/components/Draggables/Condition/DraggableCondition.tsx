import { useDispatch, useSelector } from "react-redux";
import { CC_CONDITIONS } from "../../../data/ccskills";
import {
  decrementDuration,
  incrementDuration,
  selectDurations,
} from "../../../state/ccSlice";
import Condition, { ConditionTypes } from "./Condition";
import Draggable, { DraggableBaseProps } from "../Draggable";
import classes from "../Draggable.module.css";

export interface DraggableConditionProps extends DraggableBaseProps {
  gw2id: ConditionTypes;
}

export default function DraggableCondition({
  id,
  gw2id,
  inArmory = false,
}: DraggableConditionProps) {
  const dispatch = useDispatch();

  const basecc = CC_CONDITIONS[gw2id].value;
  const duration = useSelector(selectDurations(id));

  const cc = basecc * duration;

  function onIncrease() {
    dispatch(incrementDuration(id));
  }

  function onDecrease() {
    dispatch(decrementDuration(id));
  }

  return (
    <Draggable
      id={id}
      inArmory={inArmory}
      cc={cc}
      moreIcons={(showIcons) =>
        showIcons &&
        !inArmory && (
          <>
            <span className={classes.minus} onClick={onDecrease}>
              -
            </span>
            <span className={classes.plus} onClick={onIncrease}>
              +
            </span>
          </>
        )
      }
    >
      <Condition gw2id={gw2id} id={id} inArmory={inArmory} />
    </Draggable>
  );
}
