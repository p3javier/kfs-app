import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggleDrawer",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { open } = toggleSlice.actions;

export const selectToggle = (state: { toggleDrawer: { value: boolean } }) =>
  state.toggleDrawer.value;
export default toggleSlice.reducer;
