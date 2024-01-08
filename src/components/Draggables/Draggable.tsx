import { useDispatch } from "react-redux";
import classes from "./Draggable.module.css";
import { removeCCSkill } from "../../state/ccSlice";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export type DraggableTypes = "Skill" | "Condition";

export interface DraggableBaseProps {
  id: string;
  inArmory?: boolean;
}

export interface DraggableProps extends DraggableBaseProps {
  cc: number;
  children: React.ReactNode;
}

export default function Draggable({
  id,
  inArmory = false,
  children,
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

      {!inArmory && transform == null && (
        <span className={classes.closeIcon} onClick={handleClose}>
          &times;
        </span>
      )}
    </span>
  );
}
