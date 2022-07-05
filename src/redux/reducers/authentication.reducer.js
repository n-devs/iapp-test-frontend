import {
      GET_AUTHENTICATION,
      UPDATE_AUTHENTICATION,
      DELETE_AUTHENTICATION
} from '../constants/authentication.constant';

export const initState = {};

 const authenticationReducer = (state = initState, { type, payload }) => {
      switch (type) {
            case GET_AUTHENTICATION:
                  return { ...state, ...payload };
            case UPDATE_AUTHENTICATION:
                  return { ...state, ...payload };
            case DELETE_AUTHENTICATION:
                  return { ...state, ...payload };
            default: return state;
      }
}

export default authenticationReducer;