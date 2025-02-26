import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const profilesListsSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return action.payload;
    },
    popolateList: (state, action) => {
      return state.map((profile) => (profile._id === action.payload._id ? { ...state, ...action.payload } : profile));
    },
  },
});

export const { setProfile, popolateList } = profilesListsSlice.actions;
export default profilesListsSlice.reducer;
