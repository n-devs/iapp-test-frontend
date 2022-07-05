import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../services/storefront.service'
import {
      GET_STOREFRONT,
      GET_STOREFRONT_REQUESTED,
      CREATE_STOREFRONT,
      CREATE_STOREFRONT_REQUESTED,
      UPDATE_STOREFRONT,
      UPDATE_STOREFRONT_REQUESTED,
      DELETE_STOREFRONT,
      DELETE_STOREFRONT_REQUESTED
} from '../constants/storefront.constant';

export function* getStoreFrontRedux({ payload }) {
      const storefront = yield call(API.getStoreFront, payload)
      yield put({ type: GET_STOREFRONT, payload: storefront })
}

export function* setStoreFrontRedux({ payload }) {
      const storefront = yield call(API.updateStoreFront, payload)
      yield put({ type: UPDATE_STOREFRONT, payload: storefront })
}

export function* addStoreFrontRedux({ payload }) {
      const storefront = yield call(API.postStoreFront, payload)
      yield put({ type: CREATE_STOREFRONT, payload: storefront })
}

export function* deleteStoreFrontRedux({ payload }) {
      const storefront = yield call(API.deleteStoreFront, payload)
      yield put({ type: DELETE_STOREFRONT, payload: storefront })
}


export default function* storefrontSaga() {
      yield takeEvery(GET_STOREFRONT_REQUESTED, getStoreFrontRedux);
      yield takeEvery(CREATE_STOREFRONT_REQUESTED, addStoreFrontRedux);
      yield takeEvery(UPDATE_STOREFRONT_REQUESTED, setStoreFrontRedux);
      yield takeEvery(DELETE_STOREFRONT_REQUESTED, deleteStoreFrontRedux);
}