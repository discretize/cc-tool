import { CC_CONDITIONS, CC_SKILLS_BY_PROFESSION } from "../../data/ccskills";
import { generateRandomString } from "../../utils/utils";
import { ConditionTypes } from "../Draggables/Condition/Condition";
import DraggableCondition from "../Draggables/Condition/DraggableCondition";
import DraggableSkill from "../Draggables/Skill/DraggableSkill";
import style from "./CCArmory.module.css";

export default function CCArmory() {
  return (
    <>
      <h2 className="mb-4">Armory</h2>

      <section className="mb-8 overflow-auto">
        {Object.keys(CC_SKILLS_BY_PROFESSION).map((profession) => (
          <ul key={profession} className={style.list + " flex gap-1"}>
            {CC_SKILLS_BY_PROFESSION[profession].map((skill) => (
              <li key={skill.id as string}>
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
