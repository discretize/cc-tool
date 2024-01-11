import SingleProfession, { ProfessionTypes } from "./SingleProfession";

export default function SelectProfessions() {
  return (
    <div className="mt-2">
      <label htmlFor="professionList" className="label-text pl-1">
        Filter Professions
      </label>
      <div className="form-control flex flex-row" id="professionList">
        {[
          "Guardian",
          "Warrior",
          "Revenant",
          "Ranger",
          "Thief",
          "Engineer",
          "Necromancer",
          "Elementalist",
          "Mesmer",
        ].map((profession) => (
          <SingleProfession
            profession={profession as ProfessionTypes}
            key={profession}
          />
        ))}
      </div>
    </div>
  );
}
