import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
  preset: string | null;
}

const initialState: SettingsState = {
  preset: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPreset: (state, action: PayloadAction<string | null>) => {
      state.preset = action.payload;
    },
  },
});

export const { setPreset } = settingsSlice.actions;

export const selectPreset = (state: { settings: SettingsState }) =>
  state.settings.preset;

export default settingsSlice.reducer;
