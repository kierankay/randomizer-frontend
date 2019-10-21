import {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER,
  UPDATE_CURRENT_COHORT,
  GOT_COHORTS,
  GOT_ONE_COHORT,
  // GOT_ONE_STUDENT
} from './actionTypes';

const INITIAL_STATE = {
  user: '',
  token: '',
  cohorts: [],
  currentCohort: '',
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
    // case GOT_ONE_STUDENT:
    //   return {
    //     ...state,
    //     students: [...]
    //   }
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