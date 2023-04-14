import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mark-azdev/azdev-json-server',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer jwt-fake-token'
  }
})

export default {
  getRoles() {
    console.log(axios.defaults.headers)
    return apiClient.get(
      "/roles"
      )
  },
  // getProfile() {
  //   return null
  // }
}