import { useDispatch, useSelector } from "react-redux";
import classes from "./Draggable.module.css";
import {
  decrementTicks,
  incrementTicks,
  selectTicks,
} from "../../state/ccSlice";

export default function TickHandling({
  id,
  showIcons,
  max,
}: {
  id: string;
  showIcons: boolean;
  max?: number;
}) {
  const dispatch = useDispatch();
  const ticks = useSelector(selectTicks(id));

  function onIncrease() {
    if (max && ticks >= max) return;
    dispatch(incrementTicks(id));
  }

  function onDecrease() {
    dispatch(decrementTicks(id));
  }

  return (
    <>
      <span
        className={classes.minus + " " + (showIcons ? "visible" : "hidden")}
        onClick={onDecrease}
      >
        -
      </span>
      <span
        className={classes.plus + " " + (showIcons ? "visible" : "hidden")}
        onClick={onIncrease}
      >
        +
      </span>
    </>
  );
}
