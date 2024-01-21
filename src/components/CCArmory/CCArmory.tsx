import { useSelector } from "react-redux";
import { CC_CONDITIONS, CC_SKILLS_BY_PROFESSION } from "../../data/ccskills";
import { selectProfessions } from "../../state/settingsSlice";
import { firstUpperCase, generateRandomString } from "../../utils/utils";
import { ConditionTypes } from "../Draggables/Condition/Condition";
import DraggableCondition from "../Draggables/Condition/DraggableCondition";
import DraggableSkill from "../Draggables/Skill/DraggableSkill";
import style from "./CCArmory.module.css";

export default function CCArmory() {
  const professions = useSelector(selectProfessions);

  return (
    <>
      <h2 className="mb-4">Armory</h2>

      <section
        className="mb-8 overflow-auto sticky top-0 z-50"
        style={{ backgroundColor: "oklch(0.279963 0.010163 260.705)" }}
      >
        {Object.keys(CC_SKILLS_BY_PROFESSION)
          .filter((prof) =>
            professions.length == 0
              ? true
              : professions.includes(firstUpperCase(prof))
          )
          .map((profession) => (
            <ul key={profession} className={style.list + " flex gap-1"}>
              {CC_SKILLS_BY_PROFESSION[profession].map((skill) => (
                <li key={`${skill.id}`}>
                  <DraggableSkill
                    id={"Skill-" + skill.id + "-" + generateRandomString(10)}
                    gw2id={skill.id as number}
                    inArmory
                  />
                </li>
              ))}
            </ul>
          ))}

        <ul className={style.list + " flex gap-1"}>
          {Object.keys(CC_CONDITIONS).map((id) => (
            <li key={id}>
              <DraggableCondition
                id={"Condition-" + id + "-" + generateRandomString(10)}
                gw2id={id as ConditionTypes}
                inArmory
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
