import { CC_CONDITIONS, CC_SKILLS } from "../../data/ccskills";
import { generateRandomString } from "../../utils/utils";
import DraggableCondition, {
  ConditionTypes,
} from "../Draggables/DraggableCondition";
import DraggableSkill from "../Draggables/DraggableSkill";
import style from "./CCArmory.module.css";

export default function CCArmory() {
  return (
    <section>
      <h2 className="mb-4">Armory</h2>

      <ul className={style.list}>
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

      <hr></hr>

      <ul className={style.list}>
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
  );
}
