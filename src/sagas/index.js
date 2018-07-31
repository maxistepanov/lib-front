import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import toster from './Toster.saga';
import categories from './Categories.saga';
import menu from './Menu.saga';

function* rootSaga() {
  yield all([categories, toster, menu]);
}

export default rootSaga;
