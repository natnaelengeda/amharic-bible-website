
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectionState {
  book: string;
  chapter: string;
}

export const initialState: SelectionState = {
  book: "",
  chapter: "",
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<string>) => {
      state.book = action.payload;
    },
    setChapter: (state, action: PayloadAction<string>) => {
      state.chapter = action.payload;
    },
  },
});

export const { setBook, setChapter } = selectionSlice.actions;
export const selector = (state: { selection: SelectionState }) => state.selection;
export default selectionSlice.reducer;
