import { Profession } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProfession,
  removeProfession,
  selectProfessions,
} from "../../state/settingsSlice";

export type ProfessionTypes = ComponentProps<typeof Profession>["name"];

export default function SingleProfession({
  profession,
}: {
  profession: ProfessionTypes;
}) {
  const dispatch = useDispatch();

  const professions = useSelector(selectProfessions);
  const selected = professions.includes(profession);

  function toggleProfession() {
    if (selected) {
      dispatch(removeProfession(profession));
    } else {
      dispatch(addProfession(profession));
    }
  }

  return (
    <>
      <label className="label cursor-pointer w-30 mr-2">
        <span className="label-text mr-1">
          <Profession name={profession} disableLink />
        </span>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={selected}
          onChange={toggleProfession}
        />
      </label>
    </>
  );
}
