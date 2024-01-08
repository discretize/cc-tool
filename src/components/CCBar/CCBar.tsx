import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { selectCC, selectStored } from "../../state/ccSlice";
import DraggableGeneric from "../Draggables/DraggableGeneric";
import classes from "./CCBar.module.css";

export interface CCBarProps {
  label: string;
  id: string;
  size: number;
}

function CCBar({ label, id, size }: CCBarProps) {
  const currentIds = useSelector(selectStored(id));
  const currentCC = useSelector(selectCC(id));

  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className={classes.root}>
      <div>
        {label} ({currentCC}/{size})
      </div>
      <div
        style={{
          minWidth: size + "px",
          maxWidth: size + "px",
        }}
        id={id}
        className={classes.bar}
        ref={setNodeRef}
      >
        {currentIds.map((localProps) => (
          <DraggableGeneric key={localProps.id} {...localProps} />
        ))}
      </div>
    </div>
  );
}

export default CCBar;
