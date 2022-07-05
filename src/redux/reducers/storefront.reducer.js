import {
      GET_STOREFRONT,
      UPDATE_STOREFRONT,
      DELETE_STOREFRONT
} from '../constants/storefront.constant';

export const initState = {
      storefronts: []
};

const storeFrontReducer = (state = initState, { type, payload }) => {
      switch (type) {
            case GET_STOREFRONT:
                  return { ...state, ...payload };
            case UPDATE_STOREFRONT:
                  return { ...state, ...payload };
            case DELETE_STOREFRONT:
                  return { ...state, ...payload };
            default: return state;
      }
}

export default storeFrontReducer;