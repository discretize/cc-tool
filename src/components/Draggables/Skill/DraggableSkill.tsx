import { useSelector } from "react-redux";
import { getCCEntry } from "../../../data/ccskills";
import { selectTicks } from "../../../state/ccSlice";
import Draggable, { DraggableBaseProps } from "../Draggable";
import TickHandling from "../TickHandling";
import Skill from "./Skill";

export interface DraggableSkillProps extends DraggableBaseProps {
  gw2id: number;
}

export default function DraggableSkill({
  id,
  gw2id,
  inArmory = false,
}: DraggableSkillProps) {
  const entry = getCCEntry("Skill", gw2id);
  const ticks = useSelector(selectTicks(id));

  const cc = entry.cc * ticks;

  return (
    <Draggable
      id={id}
      inArmory={inArmory}
      cc={cc}
      moreIcons={
        entry.maxTicks || 1 > 1
          ? (showIcons) => (
              <TickHandling
                id={id}
                showIcons={showIcons}
                max={entry.maxTicks}
              />
            )
          : undefined
      }
    >
      <Skill gw2id={gw2id} inArmory={inArmory} id={id} />
    </Draggable>
  );
}
