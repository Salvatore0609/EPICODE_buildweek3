import { addExperience, removeExperience } from "../reducers/experienceSlice";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

export const fetchExperience = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/experiences`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Errore nel recupero delle esperienze");
    }
    const data = await response.json();
    data.forEach((exp) => dispatch(addExperience(exp)));
  } catch (error) {
    console.error("Errore nel recupero delle esperienze:", error);
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
    if (!response.ok) {
      throw new Error("Errore nel salvataggio dell'esperienza");
    }
    const data = await response.json();
    dispatch(addExperience(data));
  } catch (error) {
    console.error("Errore durante la creazione dell'esperienza:", error);
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
    if (!response.ok) {
      throw new Error("Errore nell'aggiornamento dell'esperienza");
    }
    const data = await response.json();
    dispatch(addExperience(data));
  } catch (error) {
    console.error("Errore durante l'aggiornamento dell'esperienza:", error);
  }
};

export const deleteExperience = (userId, expId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Errore nella cancellazione dell'esperienza");
    }

    dispatch(removeExperience(expId));
  } catch (error) {
    console.error("Errore durante la cancellazione dell'esperienza:", error);
  }
};
