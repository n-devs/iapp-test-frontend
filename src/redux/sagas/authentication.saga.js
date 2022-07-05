import { put, call, takeEvery } from 'redux-saga/effects'
import API from '../services/authentication.service'
import {
      GET_AUTHENTICATION,
      GET_AUTHENTICATION_REQUESTED,
      CREATE_AUTHENTICATION,
      CREATE_AUTHENTICATION_REQUESTED,
      UPDATE_AUTHENTICATION,
      UPDATE_AUTHENTICATION_REQUESTED,
      DELETE_AUTHENTICATION,
      DELETE_AUTHENTICATION_REQUESTED
} from '../constants/authentication.constant';

export function* getAuthenticationRedux() {
      const users = yield call(API.dashboard)
      yield put({ type: GET_AUTHENTICATION, payload: users })
}

export function* setAuthenticationRedux({ payload }) {
      const users = yield call(API.login, payload)
      yield put({ type: UPDATE_AUTHENTICATION, payload: users })
}

export function* addAuthenticationRedux({ payload }) {
      const users = yield call(API.register, payload)

      console.log(users);
      yield put({ type: CREATE_AUTHENTICATION, payload: users })
}

export function* deleteAuthenticationRedux({ payload }) {
      const users = yield call(API.logout)
      yield put({ type: DELETE_AUTHENTICATION, payload: users })
}


export default function* stateSaga() {
      yield takeEvery(CREATE_AUTHENTICATION_REQUESTED, addAuthenticationRedux);
      yield takeEvery(GET_AUTHENTICATION_REQUESTED, getAuthenticationRedux);
      yield takeEvery(UPDATE_AUTHENTICATION_REQUESTED, setAuthenticationRedux);
      yield takeEvery(DELETE_AUTHENTICATION_REQUESTED, deleteAuthenticationRedux);
}