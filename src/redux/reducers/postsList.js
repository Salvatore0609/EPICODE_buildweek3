import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsListSlice = createSlice({
  name: "postsList",
  initialState,
  reducers: {
    setPostsList: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPostsList } = postsListSlice.actions;
export default postsListSlice.reducer;
