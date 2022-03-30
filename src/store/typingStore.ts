import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initial_state = {
  currentLetter: "" as string,
};

const Typing = createSlice({
  name: "typing",
  initialState: initial_state,
  reducers: {
    updateLetter(state, action: PayloadAction<string>) {
      state.currentLetter = action.payload;
    },

    spaceClicked(state) {
      state.currentLetter = "space";
    },
  },
});

export default Typing;
export const TypingActions = Typing.actions;
