import { Condition } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { CC_CONDITIONS } from "../../data/ccskills";
import Draggable, { DraggableBaseProps } from "./Draggable";
import classes from "./Draggable.module.css";

export type ConditionTypes = ComponentProps<typeof Condition>["name"];

export interface DraggableConditionProps extends DraggableBaseProps {
  gw2id: ConditionTypes;
}

export default function DraggableCondition({
  id,
  gw2id,
  inArmory = false,
}: DraggableConditionProps) {
  const cc = CC_CONDITIONS[gw2id];

  return (
    <Draggable id={id} inArmory={inArmory} cc={cc.value}>
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
        <span className={classes.ccText}>{cc.value}/s</span>
      </span>
    </Draggable>
  );
}
