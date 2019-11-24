// import api from './api'
import axios from 'axios'

const userAPI = axios.create({
  baseURL: process.env.REACT_APP_API_USER || 'http://localhost:7000/',
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE"
  }
})

class User {
  static async getUser() {
    const res = await userAPI.get('all')
    const users = res.data
    return users
  }
}

export default User;