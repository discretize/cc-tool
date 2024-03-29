import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { removeCCSkill } from "../../state/ccSlice";
import classes from "./Draggable.module.css";
import { useEffect, useState } from "react";

export type DraggableTypes = "Skill" | "Condition";

export interface DraggableBaseProps {
  id: string;
  inArmory?: boolean;
}

export interface DraggableProps extends DraggableBaseProps {
  cc: number;
  children: React.ReactNode;
  moreIcons?: (isMoving: boolean) => React.ReactNode;
}

export default function Draggable({
  id,
  inArmory = false,
  children,
  moreIcons,
  cc,
}: DraggableProps) {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(removeCCSkill(id));
  }

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    width: inArmory ? 100 : cc,
  };

  const [showIcons, setShowIcons] = useState(false);
  useEffect(() => {
    if (inArmory) return;
    if (transform != null) setShowIcons(false);
    else setTimeout(() => setShowIcons(true), 500);
  }, [transform, inArmory]);

  return (
    <span className={classes.root}>
      <span
        style={style}
        className={classes.wrapper}
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      >
        {children}
      </span>

      <span
        className={
          classes.closeIcon +
          " transition-all " +
          (showIcons ? "visible" : "hidden")
        }
        onClick={handleClose}
      >
        &times;
      </span>
      {moreIcons && moreIcons(showIcons)}
    </span>
  );
}
