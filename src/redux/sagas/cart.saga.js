import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../services/cart.service'
import {
      GET_CART,
      GET_CART_REQUESTED,
      CREATE_CART,
      CREATE_CART_REQUESTED,
      UPDATE_CART,
      UPDATE_CART_REQUESTED,
      DELETE_CART,
      DELETE_CART_REQUESTED
} from '../constants/cart.constant';

export function* getCartRedux({ payload }) {
      const cart = yield call(API.getCart, payload)
      yield put({ type: GET_CART, payload: cart })
}

export function* setCartRedux({ payload }) {
      const cart = yield call(API.updateCart, payload)
      yield put({ type: UPDATE_CART, payload: cart })
}

export function* addCartRedux({ payload }) {
      const cart = yield call(API.postCart, payload)
      yield put({ type: CREATE_CART, payload: cart })
}

export function* deleteCartRedux({ payload }) {
      const cart = yield call(API.deleteCart, payload)
      yield put({ type: DELETE_CART, payload: cart })
}


export default function* cartSaga() {
      yield takeEvery(GET_CART_REQUESTED, getCartRedux);
      yield takeEvery(CREATE_CART_REQUESTED, addCartRedux);
      yield takeEvery(UPDATE_CART_REQUESTED, setCartRedux);
      yield takeEvery(DELETE_CART_REQUESTED, deleteCartRedux);
}