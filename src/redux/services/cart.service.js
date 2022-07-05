/**
 * Mocking client-server processing
 */
import axios from './defaultAxios.service';

const api = {
  postCart: async (data) => {
    try {
      const cart = await axios.post('cart', {
        data
      })

      return cart.data
    } catch (err) {
      return console.error(err)
    }
  },
  updateCart: async (data) => {
    try {
      const cart = await axios.put('cart', {
        data
      })

      return cart.data
    } catch (err) {
      return console.error(err)
    }
  },
  getCart: async () => {
    try {
      const cart = await axios.get(`cart`)

      return cart.data
    } catch (err) {
      return console.error(err)
    }
  },
  deleteCart: async () => {
    try {
      // console.log(data);
      await axios.delete(`cart`)

      // return data
    } catch (err) {
      return console.error(err)
    }
  }
}

export default api;