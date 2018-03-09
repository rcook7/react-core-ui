import { delay } from 'redux-saga'
import { put, take, call, fork, all, select } from 'redux-saga/effects'
import * as actions from '../actions'
import * as Api from '../Api'
import { push } from 'react-router-redux';
import { getToken } from './selectors';

// Auth Section

function* authFailed() {
  yield put(actions.loginFailed());
  yield put(actions.setApiStatus('auth_failed'));
  yield delay(4000);
  yield put(actions.setApiStatus(''));
}

function* login() {
  while(true) {
    try {
      const {username, password} = yield take(actions.LOGIN)
      const res = yield call(Api.authenticate, username, password)
      if (res.token) {
        yield put(actions.setToken(res.token))
        yield put(actions.setApiStatus('success'))
        yield put(push('/dashboard'))
      } else {
        yield call(authFailed)
      }
    } catch(error) {
      yield call(authFailed)
    }
  }
}

function* logout() {
  while (true) {
    yield take([actions.LOGOUT, actions.LOGIN_FAILED])
    yield put(actions.setToken(''))
  }
}

// Register Section

function* registerFailed() {
  yield put(actions.setApiStatus('register_failed'))
  yield delay(4000);
  yield put(actions.setApiStatus(''))
}

function* registerFlow() {
  while(true) {
    const {username, password} = yield take(actions.REGISTER)
    try {
      yield put(actions.setApiStatus(''))
      const res = yield call(Api.register, username, password)
      if (res.status) {
        yield call(registerFailed)
      } else {
        yield put(push('/login'));
        yield put(actions.setApiStatus('register_success'))
        yield delay(4000);
        yield put(actions.setApiStatus(''))
      }
    } catch(error) {
      yield call(registerFailed)
    }
  }
}

// API Section

function* getApi() {
  while(true) {
    const {url, saveAction} = yield take(actions.GET_API)
    yield put(actions.setApiStatus(''))
    const token = yield select(getToken);
    const res = yield call(Api.getDelete, url, token)
    if (res.status) {
      yield put(actions.setApiStatus('failed'))
    } else {
      yield put(saveAction(res))
      yield put(actions.setApiStatus('success'))
    }
  }
}

function* postApi() {
  while(true) {
    const {url, data, saveAction} = yield take(actions.POST_API);
    yield put(actions.setApiStatus(''));
    const token = yield select(getToken);
    const res = yield call(Api.postPut, url, token, data);
    if (res.status) {
      yield put(actions.setApiStatus('failed'));
    } else {
      yield put(saveAction(res));
      yield put(actions.setApiStatus('success'));
    }
  }
}

function* deleteApi() {
  while(true) {
    const {url, saveAction} = yield take(actions.DELETE_API)
    yield put(actions.setApiStatus(''))
    const token = yield select(getToken)
    const res = yield call(Api.getDelete, url, token, 'DELETE')
    if (res.status) {
      yield put(actions.setApiStatus('failed'))
    } else {
      yield put(saveAction(res))
      yield put(actions.setApiStatus('success'))
    }
  }
}

function* putApi() {
  while(true) {
    const {url, data, saveAction} = yield take(actions.PUT_API);
    yield put(actions.setApiStatus(''));
    const token = yield select(getToken);
    const res = yield call(Api.postPut, url, token, data, 'PUT');
    if (res.status) {
      yield put(actions.setApiStatus('failed'));
    } else {
      yield put(saveAction(res));
      yield put(actions.setApiStatus('success'));
    }
  }
}

// Root Saga

export function* rootSaga() {
  yield all([
    login(),
    logout(),
    registerFlow(),
    getApi(),
    postApi(),
    deleteApi(),
    putApi()
  ])
}
