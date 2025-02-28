import { SELECT_JOB, SET_JOBS } from "../action/jobsAction";

const initialState = {
  jobs: [],
  job: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SELECT_JOB:
      return {
        ...state,
        job: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
