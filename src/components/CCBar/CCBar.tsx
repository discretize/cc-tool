import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { selectCC, selectStored } from "../../state/ccSlice";
import { DraggableGeneric } from "../Draggables/Generics";
import classes from "./CCBar.module.css";

export interface CCBarProps {
  label: string;
  id: string;
  size: number;
}

function CCBar({ label, id, size }: CCBarProps) {
  const currentIds = useSelector(selectStored(id));
  const currentCC = useSelector(selectCC(id));

  const { setNodeRef } = useDroppable({
    id,
  });

  const isDone = currentCC >= size;

  return (
    <div className={classes.root}>
      <div>
        {label} ({currentCC}/{size})
      </div>
      <div
        style={{
          minWidth: size + 12 + "px",
          maxWidth: size + 12 + "px",
        }}
        id={id}
        className={
          classes.bar +
          " border-zinc-900/80 border-2 p-1 h-16 " +
          (!isDone ? "bg-red-900/30" : "bg-green-500/40") // " bg-zinc-500/70 "
        }
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
