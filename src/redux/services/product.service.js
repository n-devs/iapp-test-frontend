/**
 * Mocking client-server processing
 */
import axios from './defaultAxios.service';

const api = {
  postProduct: async (data) => {
    try {
      const product = await axios.post('product', {
        data
      })

      return product.data
    } catch (err) {
      return console.error(err)
    }
  },
  updateProduct: async (data) => {
    try {
      const product = await axios.put('product', {
        data
      })

      return product.data
    } catch (err) {
      return console.error(err)
    }
  },
  getProduct: async (id) => {
    try {
      if (id) {
        const product = await axios.get(`product/${id}`)

        return product.data
      } else {
        const product = await axios.get(`product`)

        return product.data
      }

    } catch (err) {
      return console.error(err)
    }
  },
  deleteProduct: async () => {
    try {
      // console.log(data);
      await axios.delete(`product`)

      // return data
    } catch (err) {
      return console.error(err)
    }
  }
}

export default api;