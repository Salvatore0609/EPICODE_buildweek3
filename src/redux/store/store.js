import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice";
import profilesListsReducer from "../reducers/profilesLists";
import experienceReducer from "../reducers/experienceSlice";
import jobsReducer from "../reducers/jobsReducer";
import postReducer from "../reducers/postSlice";
import postsListReducer from "../reducers/postsList";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    profilesLists: profilesListsReducer,
    experience: experienceReducer,
    jobs: jobsReducer,
    post: postReducer,
    postsList: postsListReducer,
  },
});
