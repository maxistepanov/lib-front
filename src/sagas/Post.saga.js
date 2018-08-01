import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  select,
} from 'redux-saga/effects';

import { getPosts } from 'modules/ApiClient';
import {
  POSTS_FAILED,
  POSTS_REQUESTED,
  POSTS_SUCCESS,
} from '../constants/PostsTypes';

export function* fetch() {
  try {
    const data = yield call(getPosts);
    yield put({ type: POSTS_SUCCESS, data });
  } catch (error) {
    yield put({ type: POSTS_FAILED, error });
  }
}

const sagas = all([takeEvery(POSTS_REQUESTED, fetch)]);

export default sagas;
