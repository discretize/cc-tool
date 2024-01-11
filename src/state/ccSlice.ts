import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DraggableTypes } from "../components/Draggables/Draggable";
import { getCCValue } from "../data/ccskills";

export type StoredCC = {
  id: string;
  type: DraggableTypes;
  gw2id: unknown;
};

export interface CCState {
  skills: Record<string, StoredCC[]>;
  ticks: Record<string, number>;
}

const initialState: CCState = {
  skills: {},
  ticks: {},
};

export const ccSlice = createSlice({
  name: "cc",
  initialState,
  reducers: {
    clearAll: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((bar) => {
        state.skills[bar]?.forEach((skill) => {
          delete state.ticks[skill.id];
        });
        state.skills[bar] = [];
      });
    },
    incrementTicks: (state, action: PayloadAction<string>) => {
      state.ticks[action.payload] = (state.ticks[action.payload] || 1) + 1;
    },
    decrementTicks: (state, action: PayloadAction<string>) => {
      if (!state.ticks[action.payload] || state.ticks[action.payload] <= 1) {
        return;
      }
      state.ticks[action.payload] = state.ticks[action.payload] - 1;
    },
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
export const {
  clearAll,
  addCCSkill,
  removeCCSkill,
  incrementTicks,
  decrementTicks,
} = ccSlice.actions;

export const selectIds = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.skills,
    (skills) => skills[bar]?.map((skill) => skill.id) || []
  );

export const selectCC = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc,
    (state) =>
      state.skills[bar]?.reduce(
        (acc, skill) =>
          acc +
          getCCValue(skill.type, skill.gw2id) * (state.ticks[skill.id] || 1),
        0
      ) || 0
  );

export const selectStored = (bar: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.skills,
    (skills) => skills[bar] || []
  );
export const selectTicks = (id: string) =>
  createSelector(
    (state: { cc: CCState }) => state.cc.ticks,
    (ticks) => ticks[id] || 1
  );

export default ccSlice.reducer;
