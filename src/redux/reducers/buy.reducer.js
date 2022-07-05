import {
      GET_BUY,
      UPDATE_BUY,
      DELETE_BUY
} from '../constants/buy.constant';

export const initState = {
      buys: []
};

const buyReducer = (state = initState, { type, payload }) => {
      switch (type) {
            case GET_BUY:
                  return { ...state, ...payload };
            case UPDATE_BUY:
                  return { ...state, ...payload };
            case DELETE_BUY:
                  return { ...state, ...payload };
            default: return state;
      }
}

export default buyReducer