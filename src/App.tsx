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
import DraggableGeneric from "./components/Draggables/DraggableGeneric";
import SelectPreset from "./components/SelectPreset/SelectPreset";
import { presets } from "./data/presets";
import { addCCSkill, removeCCSkill } from "./state/ccSlice";
import { selectPreset } from "./state/settingsSlice";

function App() {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const preset = useSelector(selectPreset);
  const bars: CCBarProps[] = preset ? presets[preset] : [];

  return (
    <>
      <h1>CC Calculator</h1>

      <SelectPreset />

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <CCArmory />

          <div>
            <h2>CC Bars to break</h2>
            {bars.map((bar) => (
              <CCBar key={bar.id} {...bar} />
            ))}
          </div>
        </div>

        <DragOverlay>
          {activeId ? (
            <DraggableGeneric
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
