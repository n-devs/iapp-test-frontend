import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../services/buy.service'
import {
      GET_BUY,
      GET_BUY_REQUESTED,
      CREATE_BUY,
      CREATE_BUY_REQUESTED,
      UPDATE_BUY,
      UPDATE_BUY_REQUESTED,
      DELETE_BUY,
      DELETE_BUY_REQUESTED
} from '../constants/buy.constant';

export function* getBuyRedux({ payload }) {
      const buy = yield call(API.getBuy, payload)
      yield put({ type: GET_BUY, payload: buy })
}

export function* setBuyRedux({ payload }) {
      const buy = yield call(API.updateBuy, payload)
      yield put({ type: UPDATE_BUY, payload: buy })
}

export function* addBuyRedux({ payload }) {
      const buy = yield call(API.postBuy, payload)
      yield put({ type: CREATE_BUY, payload: buy })
}

export function* deleteBuyRedux({ payload }) {
      const buy = yield call(API.deleteBuy, payload)
      yield put({ type: DELETE_BUY, payload: buy })
}


export default function* buySaga() {
      yield takeEvery(GET_BUY_REQUESTED, getBuyRedux);
      yield takeEvery(CREATE_BUY_REQUESTED, addBuyRedux);
      yield takeEvery(UPDATE_BUY_REQUESTED, setBuyRedux);
      yield takeEvery(DELETE_BUY_REQUESTED, deleteBuyRedux);
}