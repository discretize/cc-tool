import { CC_CONDITIONS, CC_SKILLS } from "../../data/ccskills";
import { generateRandomString } from "../../utils/utils";
import { ConditionTypes } from "../Draggables/Condition/Condition";
import DraggableCondition from "../Draggables/Condition/DraggableCondition";
import DraggableSkill from "../Draggables/Skill/DraggableSkill";
import style from "./CCArmory.module.css";

export default function CCArmory() {
  return (
    <>
      <h2 className="mb-4">Armory</h2>

      <section className="mb-8">
        <ul className={style.list + " flex gap-1"}>
          {Object.keys(CC_SKILLS).map((id) => (
            <li key={id}>
              <DraggableSkill
                id={"Skill-" + id + "-" + generateRandomString(10)}
                gw2id={parseInt(id)}
                inArmory
              />
            </li>
          ))}
        </ul>
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
