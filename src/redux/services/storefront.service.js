/**
 * Mocking client-server processing
 */
import axios from './defaultAxios.service';

const api = {
  postStoreFront: async (data) => {
    try {
      const storefront = await axios.post('storefront', {
        data
      })

      return storefront.data
    } catch (err) {
      return console.error(err)
    }
  },
  updateStoreFront: async (data) => {
    try {
      const storefront = await axios.put('storefront', {
        data
      })

      return storefront.data
    } catch (err) {
      return console.error(err)
    }
  },
  getStoreFront: async (id) => {
    try {
      if (id) {
        const storefront = await axios.get(`storefront/${id}`)

        return storefront.data
      } else {
        const storefront = await axios.get(`storefront`)

        return storefront.data
      }

    } catch (err) {
      return console.error(err)
    }
  },
  deleteStoreFront: async () => {
    try {
      // console.log(data);
      await axios.delete(`storefront`)

      // return data
    } catch (err) {
      return console.error(err)
    }
  }
}

export default api;