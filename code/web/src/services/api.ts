import http from 'axios'

const axios = http.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export default axios
