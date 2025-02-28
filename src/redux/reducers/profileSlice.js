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
      console.log("Profilo aggiornato con immagine:", action.payload);
      return action.payload;
    },
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateProfilePicture: (state, action) => {
      return { ...state, image: action.payload };
    },
  },
});

export const { setProfile, updateProfile, updateProfilePicture } = profileSlice.actions;
export default profileSlice.reducer;
