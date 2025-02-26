import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: "experience",
  initialState: { esperiences: [] },
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
    },
    removeExperience: (state, action) => {
      return state.filter((exp) => exp._id !== action.payload);
    },
    updateExperience: (state, action) => {
      return state.map((exp) => (exp._id === action.payload._id ? action.payload : exp));
    },
  },
});

export const { addExperience, removeExperience, updateExperience } = experienceSlice.actions;

export default experienceSlice.reducer;
