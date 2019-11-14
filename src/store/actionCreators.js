import {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER,
  CREATE_USER,
  UPDATE_CURRENT_COHORT,
  GOT_COHORTS,
  GOT_ONE_COHORT,
  GOT_CURRENT_COHORT_STUDENTS,
  ADD_ONE_STUDENT
} from './actionTypes';
import RandomizeApi from '../RandomizeApi';

function gotCreatedUser(user) {
  return {
    type: CREATE_USER,
    payload: user
  }
}

function gotLoggedInUser(token) {
  return {
    type: LOG_IN,
    payload: token
  }
}

function gotCurrentCohortStudents(students) {
  return {
    type: GOT_CURRENT_COHORT_STUDENTS,
    payload: students
  }
}

function addedOneStudent(student) {
  return {
    type: ADD_ONE_STUDENT,
    payload: student
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

function logUserIntoApi(username, password) {
  return async function (dispatch) {
    let result = await RandomizeApi.login(username, password);

    // If there's an error, it's in result.message so return the result
    if (result.message) {
      return result
    }

    // Otherwise log the user in
    localStorage.setItem('token', result.token);
    dispatch(gotLoggedInUser(result.token));
    let resultUser = await RandomizeApi.getUser();
    dispatch(gotLoggedInUserData(resultUser));
  }
}

function getStudentsFromApi(cohort) {
  return async function (dispatch) {
    let result = await RandomizeApi.getStudentsFromCohort(cohort);
    dispatch(gotCurrentCohortStudents(result));
  }
}

function addStudentToApi(firstName, lastName, cohort) {
  return async function (dispatch) {
    let result = await RandomizeApi.addStudentToCohort(firstName, lastName, cohort);
    console.log(result);
    dispatch(addedOneStudent(result));
  }
}

function updateUserFromToken() {
  return async function (dispatch) {
    let result = await RandomizeApi.getUser();
    dispatch(gotLoggedInUserData(result));
  }
}

function createUser(username, email, password) {
  return async function (dispatch) {
    let result = await RandomizeApi.createUser(username, email, password);
    let resultToken = await RandomizeApi.login(username, password);
    console.log(resultToken);

    localStorage.setItem('token', resultToken.token);
    dispatch(gotCreatedUser(result));
    dispatch(gotLoggedInUser(resultToken.token));
  }
}

function getCohortsFromApi() {
  return async function (dispatch) {
    let result = await RandomizeApi.getCohorts();
    dispatch(gotCohorts(result));
  }
}

function addCohortToApi(cohort) {
  return async function (dispatch) {
    let result = await RandomizeApi.addCohort(cohort);
    dispatch(addOneCohort(result));
  }
}

function logUserOut() {
  return function (dispatch) {
    localStorage.token = '';
    dispatch(loggedUserOut());
  }
}

export {
  logUserIntoApi,
  getStudentsFromApi,
  logUserOut,
  updateUserFromToken,
  createUser,
  updateCurrentCohort,
  getCohortsFromApi,
  addCohortToApi,
  addStudentToApi
}