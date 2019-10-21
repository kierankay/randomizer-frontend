import {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER,
  UPDATE_CURRENT_COHORT,
  GOT_COHORTS,
  GOT_ONE_COHORT,
  // GOT_ONE_STUDENT
} from './actionTypes';
import RandomizeApi from './RandomizeApi';

function gotLoggedInUser(token) {
  return {
    type: LOG_IN,
    payload: token
  }
}

function gotLoggedInUserData(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

function loggedUserOut() {
  return {
    type: LOG_OUT
  }
}

function gotCohorts(cohorts) {
  return {
    type: GOT_COHORTS,
    payload: cohorts
  }
}

function updateCurrentCohort(cohort) {
  return {
    type: UPDATE_CURRENT_COHORT,
    payload: cohort
  }
}

function addOneCohort(cohort) {
  return {
    type: GOT_ONE_COHORT,
    payload: cohort
  }
}

// function addOneStudent(student) {
//   return {
//     type: GOT_ONE_STUDENT,
//     payload: student
//   }
// }

function logUserIntoApi(username, password) {
  return async function (dispatch) {
    let resultToken = await RandomizeApi.login(username, password)
    localStorage.setItem('token', resultToken.token)
    dispatch(gotLoggedInUser(resultToken.token))

    let resultUser = await RandomizeApi.getUser();
    dispatch(gotLoggedInUserData(resultUser))
  }
}

function updateUserFromToken() {
  return async function (dispatch) {
    let result = await RandomizeApi.getUser();
    dispatch(gotLoggedInUserData(result))
  }
}

function getCohortsFromApi() {
  return async function (dispatch) {
    let result = await RandomizeApi.getCohorts();
    dispatch(gotCohorts(result))
  }
}

function addCohortToApi(cohort) {
  return async function (dispatch) {
    let result = await RandomizeApi.addCohort(cohort);
    dispatch(addOneCohort(result))
  }
}

// function addStudentToApi(first_name, last_name, cohort) {
//   return async function (dispatch) {
//     let result = await RandomizeApi.addStudentToCohort(first_name, last_name, cohort);
//     dispatch(addOneStudent(result))
//   }
// }

function logUserOut() {
  return function (dispatch) {
    localStorage.token = '';
    dispatch(loggedUserOut())
  }
}

export {
  logUserIntoApi,
  logUserOut,
  updateUserFromToken, 
  updateCurrentCohort, 
  getCohortsFromApi, 
  addCohortToApi, 
  // addStudentToApi
}