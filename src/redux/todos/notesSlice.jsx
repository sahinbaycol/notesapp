import { createSlice } from "@reduxjs/toolkit";

export const notesSlice=createSlice({
    name:'notes',
    initialState:{
        items:[],
        filtered:''
        
    },
    reducers:{
        // add note
        addNote: (state, action) => {
            // const { title, color } = action.payload;
            state.items.push(action.payload);
        },
        search: (state, action) => {
            state.filtered = action.payload;
          },
        
        
    }
})

export const { addNote, search}=notesSlice.actions;
export default notesSlice.reducer