import {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER,
  CREATE_USER,
  UPDATE_CURRENT_COHORT,
  GOT_COHORTS,
  GOT_ONE_COHORT,
  ADD_ONE_STUDENT,
  GOT_CURRENT_COHORT_STUDENTS
} from './actionTypes';

const INITIAL_STATE = {
  user: '',
  token: '',
  cohorts: [],
  currentCohort: '',
  currentCohortStudents: [],
  groups: []
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        token: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        token: '',
        user: ''
      }
    case CREATE_USER:
      return {
        ...state,
        user: action.payload.username
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case GOT_COHORTS:
      return {
        ...state,
        cohorts: action.payload
      }
    case GOT_ONE_COHORT:
      return {
        ...state,
        cohorts: [...state.cohorts, action.payload]
      }
    case GOT_CURRENT_COHORT_STUDENTS:
      return {
        ...state,
        currentCohortStudents: action.payload
      }
    case ADD_ONE_STUDENT:
      return {
        ...state,
        currentCohortStudents: [...state.currentCohortStudents, action.payload]
      }
    case UPDATE_CURRENT_COHORT:
      return {
        ...state,
        currentCohort: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;