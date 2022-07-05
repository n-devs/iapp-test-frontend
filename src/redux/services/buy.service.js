/**
 * Mocking client-server processing
 */
import axios from './defaultAxios.service';

const api = {
  postBuy: async (data) => {
    try {
      const buy = await axios.post('buy', {
        data
      })

      return buy.data
    } catch (err) {
      return console.error(err)
    }
  },
  updateBuy: async (data) => {
    try {
      const buy = await axios.put('buy', {
        data
      })

      return buy.data
    } catch (err) {
      return console.error(err)
    }
  },
  getBuy: async () => {
    try {
      const update_user = await axios.get(`buy`)

      return update_user.data
    } catch (err) {
      return console.error(err)
    }
  },
  deleteBuy: async () => {
    try {
      // console.log(data);
      await axios.delete(`buy`)

      // return data
    } catch (err) {
      return console.error(err)
    }
  }
}

export default api;