import axios from 'axios'

export const baseUrl = axios.create({
  baseURL: 'http://localhost:3000'
})

export default baseUrl;
