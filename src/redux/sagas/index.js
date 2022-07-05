import { spawn } from 'redux-saga/effects'

// Sagas
import authenticationSaga from './authentication.saga'
import buySaga from './buy.saga'
import cartSaga from './cart.saga'
import productSaga from './product.saga'
import storeFrontSaga from './storefront.saga'

// Export the root saga
export default function* rootSaga() {
      console.log("Hello From Redux-Saga!")

      yield spawn(authenticationSaga)
      yield spawn(buySaga)
      yield spawn(cartSaga)
      yield spawn(productSaga)
      yield spawn(storeFrontSaga)
}