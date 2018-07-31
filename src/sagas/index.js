import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import toster from './toster.saga';

function* rootSaga() {
  yield all([, toster]);
}

export default rootSaga;
