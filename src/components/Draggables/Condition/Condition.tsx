import { Condition as Gw2Condi } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import { CC_CONDITIONS } from "../../../data/ccskills";
import { selectDurations } from "../../../state/ccSlice";
import classes from "../Draggable.module.css";
import { DraggableConditionProps } from "./DraggableCondition";

export type ConditionTypes = ComponentProps<typeof Gw2Condi>["name"];

export default function Condition({
  id,
  gw2id,
  inArmory,
}: DraggableConditionProps) {
  const basecc = CC_CONDITIONS[gw2id].value;
  const duration = useSelector(selectDurations(id));

  const cc = basecc * duration;

  return (
    <span
      className={classes.inner}
      style={{
        backgroundColor: `var(--gw2-color-effect-condition-dark)`,
        border: `1px solid var(--gw2-color-effect-condition-main)`,
      }}
    >
      <Gw2Condi
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
  );
}
