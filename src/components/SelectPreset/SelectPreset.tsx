import { useDispatch } from "react-redux";
import { presets } from "../../data/presets";
import { setPreset } from "../../state/settingsSlice";

export default function SelectPreset() {
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const preset = event.target.value;
    dispatch(setPreset(preset));
  }

  return (
    <div>
      <label htmlFor="preset-select">Select a boss preset</label>
      <select name="presets" id="preset-select" onChange={handleChange}>
        <option>-- Select a preset --</option>
        {Object.keys(presets).map((preset) => (
          <option key={preset} value={preset}>
            {preset}
          </option>
        ))}
      </select>
    </div>
  );
}
