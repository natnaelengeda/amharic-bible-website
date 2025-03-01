
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectionState {
  book: { title: string, index: number };
  chapter: { title: string, index: number };
}

export const initialState: SelectionState = {
  book: { title: "", index: 0 },
  chapter: { title: "", index: 0 },
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<{ title: string, index: number }>) => {
      state.book.title = action.payload.title;
      state.book.index = action.payload.index;
    },
    setChapter: (state, action: PayloadAction<{ title: string, index: number }>) => {
      state.chapter.title = action.payload.title;
      state.chapter.index = action.payload.index;
    },
  },
});

export const { setBook, setChapter } = selectionSlice.actions;
export const selector = (state: { selection: SelectionState }) => state.selection;
export default selectionSlice.reducer;
