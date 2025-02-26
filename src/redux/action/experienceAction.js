import { addExperience, removeExperience } from "../reducers/experienceSlice";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

export const fetchExperiece = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/experiences`);
    const data = await response.json();
    data.forEach((exp) => dispatch(addExperience(exp)));
  } catch (error) {
    console.log(error);
  }
};

export const createExperience = (userId, experience) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(experience),
    });
    const data = await response.json();
    dispatch(createExperience(data));
  } catch (error) {
    console.log(error);
  }
};

export const editExperience = (userId, expId, updateExp) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/experiences/${expId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(updateExp),
    });
    const data = await response.json();
    dispatch(editExperience(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = (userId, expId) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    dispatch(removeExperience(expId));
  } catch (error) {
    console.log(error);
  }
};
