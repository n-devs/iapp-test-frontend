import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../services/product.service'
import {
      GET_PRODUCT,
      GET_PRODUCT_REQUESTED,
      CREATE_PRODUCT,
      CREATE_PRODUCT_REQUESTED,
      UPDATE_PRODUCT,
      UPDATE_PRODUCT_REQUESTED,
      DELETE_PRODUCT,
      DELETE_PRODUCT_REQUESTED
} from '../constants/product.constant';

export function* getProductRedux({ payload }) {
      const product = yield call(API.getProduct, payload)
      yield put({ type: GET_PRODUCT, payload: product })
}

export function* setProductRedux({ payload }) {
      const product = yield call(API.updateProduct, payload)
      yield put({ type: UPDATE_PRODUCT, payload: product })
}

export function* addProductRedux({ payload }) {
      const product = yield call(API.postProduct, payload)
      yield put({ type: CREATE_PRODUCT, payload: product })
}

export function* deleteProductRedux({ payload }) {
      const product = yield call(API.deleteProduct, payload)
      yield put({ type: DELETE_PRODUCT, payload: product })
}


export default function* productSaga() {
      yield takeEvery(GET_PRODUCT_REQUESTED, getProductRedux);
      yield takeEvery(CREATE_PRODUCT_REQUESTED, addProductRedux);
      yield takeEvery(UPDATE_PRODUCT_REQUESTED, setProductRedux);
      yield takeEvery(DELETE_PRODUCT_REQUESTED, deleteProductRedux);
}