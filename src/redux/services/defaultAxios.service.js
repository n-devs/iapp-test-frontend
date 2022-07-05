import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://localhost:9000/api',
  headers: { 'Content-Type': 'application/json' }
});

export default axios;