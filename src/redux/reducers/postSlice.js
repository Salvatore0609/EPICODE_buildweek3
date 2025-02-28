import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { posts: [] },
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload);
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
