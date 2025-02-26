import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice";
import profilesListsReducer from "../reducers/profilesLists";
import experienceReducer from "../reducers/experienceSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    profilesLists: profilesListsReducer,
    experience: experienceReducer,
  },
});
