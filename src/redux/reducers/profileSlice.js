import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  bio: "",
  title: "",
  industry: "",
  education: "",
  area: "",
  contactInfo: "",
  website: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return action.payload;
    },
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
