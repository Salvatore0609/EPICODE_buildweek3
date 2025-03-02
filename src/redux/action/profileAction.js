/* GET */
const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

export const fetchProfile = async (userId = "me") => {
  const response = await fetch(`${API_URL}${userId}`, {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
  });

  if (!response.ok) {
    throw new Error("Errore durante il fetch del profilo");
  }

  return response.json();
};

/* PUT */
export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error("Errore durante l'aggiornamento del profilo");
    }

    const updatedProfile = await response.json();
    console.log("Dati ricevuti dal server:", updatedProfile);
    return updatedProfile;
  } catch (error) {
    console.error("Errore durante l'aggiornamento del profilo:", error);
    throw error;
  }
};
/* POST PER L'IMAGE */
export const updateProfilePicture = async (formData) => {
  const userId = "me";
  try {
    const response = await fetch(`${API_URL}${userId}/picture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Errore durante l'aggiornamento dell'immagine");
    }

    const updatedProfile = await response.json();
    console.log("Immagine del profilo aggiornata:", updatedProfile);
    return updatedProfile;
  } catch (error) {
    console.error("Errore durante l'aggiornamento dell'immagine del profilo:", error);
    throw error;
  }
};
