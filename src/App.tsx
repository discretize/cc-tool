import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  UniqueIdentifier,
  type DragStartEvent,
} from "@dnd-kit/core";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/typeface-menomonia";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CCArmory from "./components/CCArmory/CCArmory";
import CCBar, { CCBarProps } from "./components/CCBar/CCBar";
import { DraggableTypes } from "./components/Draggables/Draggable";
import { Generic } from "./components/Draggables/Generics";
import SelectPreset from "./components/SelectPreset/SelectPreset";
import { presets } from "./data/presets";
import { addCCSkill, clearAll, removeCCSkill } from "./state/ccSlice";
import { selectPreset } from "./state/settingsSlice";

function App() {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const preset = useSelector(selectPreset);
  const bars: CCBarProps[] = preset ? presets[preset] : [];

  function clearAllCC() {
    dispatch(clearAll(bars.map((bar) => bar.id)));
  }

  return (
    <>
      <h1 className="mb-6">CC Calculator</h1>

      <SelectPreset />

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="gap-4 mt-8">
          <CCArmory />

          <div>
            <h2 className="mb-4">
              CC Bars to break{" "}
              <button className="btn btn-xs btn-warning" onClick={clearAllCC}>
                Clear All
              </button>
            </h2>

            {bars.map((bar) => (
              <CCBar key={bar.id} {...bar} />
            ))}
          </div>
        </div>

        <DragOverlay>
          {activeId ? (
            <Generic
              id={activeId.toString()}
              gw2id={activeId.toString().split("-")[1]}
              type={activeId.toString().split("-")[0] as DraggableTypes}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );

  function handleDragStart(event: DragStartEvent) {
    const id = event.active.id;
    setActiveId(id);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);

    const { over } = event;

    const id = event.active.id.toString();
    if (!over) {
      // delete
      dispatch(removeCCSkill(id));
      return;
    }
    const split = id.split("-");
    const type = (split[0].charAt(0).toUpperCase() +
      split[0].slice(1)) as DraggableTypes;
    const gw2id = split[1];
    dispatch(addCCSkill({ type, gw2id, id, ccBar: over.id.toString() }));
  }
}

export default App;
