import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    filtered: "",
  },
  reducers: {
    // add note
    addNote: (state, action) => {
      // const { title, color } = action.payload;
      state.items.push(action.payload);
    },
    search: (state, action) => {
      state.filtered = action.payload;
    },
    changeItemTitle: (state, action) => {
      const { itemId, newTitle } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.title = newTitle;
      }
    },
    deleteNote: (state,action) =>{
      state.items=  state.items.filter(item=> item.id!==action.payload)
    }
  },
});

export const { addNote, search, changeItemTitle, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
