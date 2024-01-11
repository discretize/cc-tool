import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
  preset: string | null;
  professions: string[];
}

const initialState: SettingsState = {
  preset: null,
  professions: ["Ranger"],
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPreset: (state, action: PayloadAction<string | null>) => {
      state.preset = action.payload;
    },
    addProfession: (state, action: PayloadAction<string>) => {
      state.professions.push(action.payload);
    },
    removeProfession: (state, action: PayloadAction<string>) => {
      state.professions = state.professions.filter(
        (profession) => profession !== action.payload
      );
    },
  },
});

export const { setPreset, addProfession, removeProfession } =
  settingsSlice.actions;

export const selectPreset = (state: { settings: SettingsState }) =>
  state.settings.preset;
export const selectProfessions = (state: { settings: SettingsState }) =>
  state.settings.professions;

export default settingsSlice.reducer;
