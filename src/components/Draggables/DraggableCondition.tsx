import { Condition } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { CC_CONDITIONS } from "../../data/ccskills";
import Draggable, { DraggableBaseProps } from "./Draggable";
import classes from "./Draggable.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementDuration,
  incrementDuration,
  selectDurations,
} from "../../state/ccSlice";

export type ConditionTypes = ComponentProps<typeof Condition>["name"];

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
      moreIcons={(transform) =>
        !transform &&
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
      <span
        className={classes.inner}
        style={{
          backgroundColor: `var(--gw2-color-effect-condition-dark)`,
          border: `1px solid var(--gw2-color-effect-condition-main)`,
        }}
      >
        <Condition
          name={gw2id}
          disableLink
          disableText
          style={{ fontSize: "20px", lineHeight: 0 }}
        />
        {(cc >= 75 || inArmory) && (
          <span className={classes.ccText}>
            {cc}/{duration > 1 ? duration : ""}s
          </span>
        )}
      </span>
    </Draggable>
  );
}
