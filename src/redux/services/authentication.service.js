/**
 * Mocking client-server processing
 */
import axios from './defaultAxios.service';

const api = {
  register: async (data) => {
    try {

      const register = await axios.post('register', data)


      console.log(register.headers);
      console.log(register);
      window.sessionStorage.setItem("jwt", register.data.token);
      return register.data
    } catch (err) {
      return err.response.data
    }
  },
  login: async (data) => {
    try {
      const login = await axios.post('login', data)
      window.sessionStorage.setItem("jwt", login.data.token);
      return login.data
    } catch (err) {
      return err.response.data
    }
  },
  dashboard: async () => {
    try {
      const dashboard = await axios.get(`dashboard`, {
        headers: {
          'Authorization': `Bearer ${window.sessionStorage.getItem("jwt")}`
        }
      })

      console.log(dashboard.data);
      return dashboard.data
    } catch (err) {
      return err.response.data
    }
  },
  logout: async () => {
    try {
      // console.log(data);
      const logout = await axios.delete(`logout`, {
        headers: {
          'Authorization': `Bearer ${window.sessionStorage.getItem("jwt")}`
        }
      })
      window.sessionStorage.setItem("jwt",logout.data.token)
      return logout.data
    } catch (err) {
      window.sessionStorage.setItem("jwt",err.response.data.token)
      window.sessionStorage.removeItem("jwt")
      return err.response.data
    }
  }
}

export default api;