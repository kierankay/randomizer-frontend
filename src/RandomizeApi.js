import axios from 'axios';

class RandomizeApi {
  static async request(endpoint, data = {}, method = 'get') {
    data.token = localStorage.getItem('token');
    try {
      return (await axios({
        method,
        url: endpoint,
        [method === "get" ? "params" : "data"]: data
      })).data
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  } 

  static async getUser() {
    let result = await this.request('/users/check')
    return result
  }

  static async login(username, password) {
    let result = await this.request('/users/login', {username, password}, 'post')
    return result
  }
  static async getCohorts() {
    let result = await this.request('/cohorts')
    return result
  }
  static async getLastPairs(limit, cohort) {
    let result = await this.request('/groups', {limit, cohort})
    return result
  }

  static async createNewGroup(minDistance, cohort) {
    let result = await this.request('/groups/random-group', {cohort, min_paired_ago: minDistance})
    return result
  }

  static async addCohort(cohort) {
    let result = await this.request('/cohorts', {cohort}, 'post')
    return result
  }

  static async getStudentsFromCohort(cohort) {
    let result = await this.request(`/cohorts/${cohort}/students`);
    return result
  }

  static async addStudentToCohort(first_name, last_name, cohort) {
    let result = await this.request('/students', {first_name, last_name, cohort}, 'post')
    return result
  }

  static async saveNewGroup(group, project, cohort) {
    let result = await this.request('/groups', {group, project, cohort}, 'post')
    return result
  }
}

export default RandomizeApi;