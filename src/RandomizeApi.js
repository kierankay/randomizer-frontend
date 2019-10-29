import axios from 'axios';
let BASE_URL = process.env.REACT_APP_API_URL

class RandomizeApi {
  static async request(endpoint, data = {}, method = 'get') {
    data.token = localStorage.getItem('token');
    try {
      return (await axios({
        method,
        url: `${BASE_URL}${endpoint}`,
        [method === "get" ? "params" : "data"]: data
      })).data
    } catch (err) {
      console.log(endpoint, data, method)
      console.log("API ERROR:", err);
      let message = err.response ? err.response.data.message : err;
      throw Array.isArray(message) ? message : [message];
    }
  } 

  static async createUser(username, email, password) {
    let result = await this.request('/users/', {username, email, password}, 'post');
    return result
  }

  static async getUser() {
    let result = localStorage.getItem('token') ? await this.request('/users/check') : null;
    return result
  }

  static async login(username, password) {
    let result = await this.request('/users/login', {username, password}, 'post');
    return result
  }
  static async getCohorts() {
    let result = await this.request('/cohorts');
    return result
  }
  static async getLastPairs(limit, cohort) {
    let result = await this.request('/groups', {limit, cohort});
    return result
  }

  static async createNewGroup(minDistance, cohort) {
    let result = await this.request('/groups/random-group', {cohort, min_paired_ago: minDistance});
    return result
  }

  static async addCohort(cohort) {
    let result = await this.request('/cohorts', {cohort}, 'post');
    return result
  }

  static async getStudentsFromCohort(cohort) {
    let result = await this.request(`/cohorts/${cohort}/students`);
    return result
  }

  static async addStudentToCohort(first_name, last_name, cohort) {
    let result = await this.request('/students', {first_name, last_name, cohort}, 'post');
    return result
  }

  static async saveNewGroup(group, project, cohort) {
    let result = await this.request('/groups', {group, project, cohort}, 'post');
    return result
  }
}

export default RandomizeApi;