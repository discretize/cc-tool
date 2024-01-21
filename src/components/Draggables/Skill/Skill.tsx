import { SkillInternal as Gw2Skill } from "@discretize/gw2-ui-new";
import { useSelector } from "react-redux";
import skilldata from "../../../../datatranslation/skills-resolved-full.json";
import { getCCEntry } from "../../../data/ccskills";
import { selectTicks } from "../../../state/ccSlice";
import { DraggableBaseProps } from "../Draggable";
import classes from "../Draggable.module.css";

export interface SkillProps extends DraggableBaseProps {
  gw2id: number;
}

export default function Skill({ gw2id, id }: SkillProps) {
  const entry = getCCEntry("Skill", gw2id);
  const ticks = useSelector(selectTicks(id));

  const cc = entry.cc * ticks;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = skilldata[`${gw2id}`];

  if (!data) {
    return <span>Unknown skill {gw2id}</span>;
  }

  return (
    <span
      className={classes.inner}
      style={{
        backgroundColor: `var(--gw2-color-${entry.profession?.toLowerCase()}-dark)`,
        border: `1px solid var(--gw2-color-${entry.profession?.toLowerCase()}-main)`,
      }}
    >
      <Gw2Skill
        data={data}
        disableLink
        disableText
        style={{ fontSize: "20px", lineHeight: 0 }}
      />
      <span className={classes.ccText}>
        {cc} {ticks > 1 ? `(${ticks}x${entry.cc})` : ""}
      </span>
    </span>
  );
}
