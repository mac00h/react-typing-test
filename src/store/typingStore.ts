import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initial_state = {
  currentLetter: "" as string,
  updated: false,
};

const Typing = createSlice({
  name: "typing",
  initialState: initial_state,
  reducers: {
    updateLetter(state, action: PayloadAction<string>) {
      state.currentLetter = action.payload;
      state.updated = true;
    },

    spaceClicked(state) {
      state.currentLetter = "space";
      state.updated = true;
    },

    letterAdded(state) {
      state.updated = false;
    },
  },
});

export default Typing;
export const TypingActions = Typing.actions;
