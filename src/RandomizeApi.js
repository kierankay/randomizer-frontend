import axios from 'axios';
let BASE_URL = process.env.REACT_APP_API_URL

class RandomizeApi {
  static async request(endpoint, data = {}, method = 'get') {
    data.token = localStorage.getItem('token');
    try {
      return (await axios({
        method,
        url: `${BASE_URL}/api${endpoint}`,
        [method === "get" ? "params" : "data"]: data
      })).data
    } catch (err) {
      console.log(endpoint, data, method)
      console.log("API ERROR:", err);
      let message = err.response ? err.response.data.message : err;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Auth Endpoints

  static async createUser(firstName, lastName, organization, email, password) {
    let result = await this.request('/users/', { firstName, lastName, organization, email, password }, 'post');
    return result;
  }

  static async getUser() {
    let result = localStorage.getItem('token') ? await this.request('/users/check') : null;
    return result;
  }

  static async login(email, password) {
    let result = await this.request('/users/login', { email, password }, 'post');
    return result;
  }

  static async requestPasswordReset(email) {
    let result = await this.request('/users/request-password-reset', { email }, 'post');
    return result;
  }

  static async checkPasswordToken(passwordToken) {
    let result = await this.request('/users/check-password-token', { passwordToken }, 'post');
    return result.tokenValid;
  }

  static async resetPassword(password, passwordToken) {
    let result = await this.request('/users/confirm-password-reset', { password, passwordToken }, 'post');
    return result;
  }

  // Cohort Endpoints

  static async getCohorts() {
    let result = await this.request('/cohorts');
    return result;
  }

  static async addCohort(cohort) {
    let result = await this.request('/cohorts', { cohort }, 'post');
    return result;
  }

  // Group Endpoints

  static async getLastPairs(limit, cohort) {
    // Review why this is automatically using the cohort ID instead of the cohort passed in from the GroupQueryForm
    let result = await this.request(`/cohorts/${cohort}/groups`, { limit });
    return result;
  }

  static async createNewGroup(minDistance, cohort) {
    let result = await this.request(`/cohorts/${cohort}/groups/random`, { min_paired_ago: minDistance });
    return result;
  }

  static async saveNewGroup(group, project, cohort) {
    let result = await this.request(`/cohorts/${cohort}/groups`, { group, project }, 'post');
    return result;
  }

  // Student Endpoints 

  static async addStudentToCohort(first_name, last_name, cohort) {
    let result = await this.request(`/cohorts/${cohort}/students`, { first_name, last_name }, 'post');
    return result;
  }

  static async getStudentsFromCohort(cohort) {
    let result = '';
    if (cohort) {
      result = await this.request(`/cohorts/${cohort}/students`);
    }
    return result;
  }

}

export default RandomizeApi;