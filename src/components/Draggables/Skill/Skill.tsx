import { SkillInternal as Gw2Skill } from "@discretize/gw2-ui-new";
import { getCCEntry } from "../../../data/ccskills";
import { DraggableBaseProps } from "../Draggable";
import classes from "../Draggable.module.css";
import skilldata from "../../../../datatranslation/skills-resolved-full.json";

export interface SkillProps extends Omit<DraggableBaseProps, "id"> {
  gw2id: number;
}

export default function Skill({ gw2id }: SkillProps) {
  const entry = getCCEntry("Skill", gw2id);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = skilldata[`${gw2id}`];

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
      <span className={classes.ccText}>{entry.cc}</span>
    </span>
  );
}
