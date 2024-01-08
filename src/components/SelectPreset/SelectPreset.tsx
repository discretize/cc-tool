import { useDispatch } from "react-redux";
import { presets } from "../../data/presets";
import { setPreset } from "../../state/settingsSlice";

export default function SelectPreset() {
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const preset = event.target.value;
    if (preset) dispatch(setPreset(preset));
  }

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Select a boss preset</span>
      </div>
      <select
        className="select select-bordered"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          -- Select a preset --
        </option>
        {Object.keys(presets).map((preset) => (
          <option key={preset} value={preset}>
            {preset}
          </option>
        ))}
      </select>
    </label>
  );
}
