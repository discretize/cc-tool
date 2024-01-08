import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DraggableTypes } from "../components/Draggables/Draggable";

export type StoredCC = {
  id: string;
  cc: number;
  type: DraggableTypes;
  gw2id: number;
};

export interface CCState {
  skills: Record<string, StoredCC[]>;
}

const initialState: CCState = {
  skills: {},
};

export const ccSlice = createSlice({
  name: "cc",
  initialState,
  reducers: {
    addCCSkill: (
      state,
      action: PayloadAction<StoredCC & { ccBar: string }>
    ) => {
      if (!state.skills[action.payload.ccBar]) {
        state.skills[action.payload.ccBar] = [];
      }

      // check if skill is already in the bar - no dupes allowed
      if (
        state.skills[action.payload.ccBar].find(
          (skill) => skill.id === action.payload.id
        )
      ) {
        return;
      }

      // check if the skill is already in another bar - no dupes allowed
      Object.keys(state.skills).forEach((key) => {
        state.skills[key] = state.skills[key].filter(
          (skill) => skill.id !== action.payload.id
        );
      });

      state.skills[action.payload.ccBar].push({
        id: action.payload.id,
        cc: action.payload.cc,
        type: action.payload.type,
        gw2id: action.payload.gw2id,
      });
    },

    removeCCSkill: (state, action: PayloadAction<string>) => {
      Object.keys(state.skills).forEach((key) => {
        state.skills[key] = state.skills[key].filter(
          (skill) => skill.id !== action.payload
        );
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCCSkill, removeCCSkill } = ccSlice.actions;

export const selectIds = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.skills,
    (skills) => skills[bar]?.map((skill) => skill.id) || []
  );

export const selectCC = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.skills,
    (skills) => skills[bar]?.reduce((acc, skill) => acc + skill.cc, 0) || 0
  );

export const selectStored = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.skills,
    (skills) => skills[bar] || []
  );

export default ccSlice.reducer;
