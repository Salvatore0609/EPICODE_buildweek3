import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const profilesListsSlice = createSlice({
  name: "profilesLists",
  initialState,
  reducers: {
    setProfilesList: (state, action) => {
      return action.payload;
    },
    popolateList: (state, action) => {
      return state.map((profile) => (profile._id === action.payload._id ? { ...state, ...action.payload } : profile));
    },
  },
});

export const { setProfilesList, popolateList } = profilesListsSlice.actions;
export default profilesListsSlice.reducer;
