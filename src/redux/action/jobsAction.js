// import { addJobs } from "../reducers/jobsSlice";

// const API_URL = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

// export const fetchJobs = (query) => async (dispatch) => {
//   try {
//     const response = await fetch(`${API_URL}${query}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${BEARER_TOKEN}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("Errore nel recupero delle esperienze");
//     }
//     const data = await response.json();
//     data.forEach((job) => dispatch(addJobs(job)));
//   } catch (error) {
//     console.error("Errore nel recupero delle esperienze:", error);
//   }
// };

export const SET_JOBS = "SET_JOBS";

const API_URL = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

export const fetchJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}${query}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel recupero delle esperienze");
      }
      const data = await response.json();
      dispatch({ type: SET_JOBS, payload: data.data });
    } catch (error) {
      console.error("Errore nel recupero delle esperienze:", error);
    }
  };
};
