import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addNote: (store, action) => {
      return (store = [action.payload, ...store]);
    },
    removeNote: (store, action) => {
      return store.filter((note) => note.id !== action.payload);
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
