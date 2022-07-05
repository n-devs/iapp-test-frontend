import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
import buy from './buy.reducer';
import cart from './cart.reducer';
import product from './product.reducer';
import storefront from './storefront.reducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
      authenticationRedux: authentication,
      buyRedux: buy,
      cartRedux: cart,
      productRedux: product,
      storefrontRedux: storefront
})

export default rootReducer