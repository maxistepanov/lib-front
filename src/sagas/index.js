import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import toster from './Toster.saga';
import categories from './Categories.saga';
import menu from './Menu.saga';
import posts from './Post.saga';
import init from './Init.saga';

function* rootSaga() {
  yield all([categories, toster, menu, posts, init]);
}

export default rootSaga;
