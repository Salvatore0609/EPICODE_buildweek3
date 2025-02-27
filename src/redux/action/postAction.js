import { addPost, removePost } from "../reducers/postSlice";

const API_URL = "https://striveschool-api.herokuapp.com/api/posts";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

export const fetchExperience = (postId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Errore nel recupero dei post");
    }
    const data = await response.json();
    data.forEach((post) => dispatch(addPost(post)));
  } catch (error) {
    console.error("Errore nel recupero dei post", error);
  }
};

export const createPost = (postId, post) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Errore nel salvataggio del post");
    }
    const data = await response.json();
    dispatch(addPost(data));
  } catch (error) {
    console.error("Errore durante la creazione del post:", error);
  }
};

export const editPost = (postId, updatePost) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(updatePost),
    });
    if (!response.ok) {
      throw new Error("Errore nell'aggiornamento del post");
    }
    const data = await response.json();
    dispatch(addPost(data));
  } catch (error) {
    console.error("Errore durante l'aggiornamento del post:", error);
  }
};

export const deleteExperience = (postId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Errore nella cancellazione del post");
    }

    dispatch(removePost(postId));
  } catch (error) {
    console.error("Errore durante la cancellazione del post:", error);
  }
};
