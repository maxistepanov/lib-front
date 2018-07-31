import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  select,
} from 'redux-saga/effects';

function* ifOdd(action, payload) {
  const state = yield select();
  console.log('state after', state);
  console.log(action, payload);
}

const appSagas = all([takeEvery('IF_ODD', ifOdd)]);

export default appSagas;
