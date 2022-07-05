import {
      GET_PRODUCT,
      UPDATE_PRODUCT,
      DELETE_PRODUCT
} from '../constants/product.constant';

export const initState = {
      products: []
};

const productReducer = (state = initState, { type, payload }) => {
      switch (type) {
            case GET_PRODUCT:
                  return { ...state, ...payload };
            case UPDATE_PRODUCT:
                  return { ...state, ...payload };
            case DELETE_PRODUCT:
                  return { ...state, ...payload };
            default: return state;
      }
}

export default productReducer;