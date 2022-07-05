import {
      GET_CART,
      UPDATE_CART,
      DELETE_CART
} from '../constants/cart.constant';

export const initState = {
      carts: []
};

const cartReducer =(state = initState, { type, payload }) => {
      switch (type) {
            case GET_CART:
                  return { ...state, ...payload };
            case UPDATE_CART:
                  return { ...state, ...payload };
            case DELETE_CART:
                  return { ...state, ...payload };
            default: return state;
      }
}

export default cartReducer;