import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  select,
  take,
} from 'redux-saga/effects';

import { MENU_REQUESTED, MENU_SUCCESS } from 'constants/MenuTypes';
import { POSTS_REQUESTED, POSTS_SUCCESS } from 'constants/PostsTypes';
import { INIT_FAILED, INIT, INIT_SUCCESS } from 'constants/InitTypes';

function* init() {
  yield all([put({ type: MENU_REQUESTED }), put({ type: POSTS_REQUESTED })]);
}

function* hideLoader() {
  const loader = document.getElementById('container-loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(() => {
      loader.outerHTML = '';
    }, 2000);
    yield loader;
  }
}

function* waitRequests() {
  yield all([take(MENU_SUCCESS), take(POSTS_SUCCESS)]);

  yield put({ type: INIT_SUCCESS });
}

const sagas = all([
  takeEvery(INIT, init),
  takeEvery(INIT_SUCCESS, hideLoader),
  waitRequests(),
]);

export default sagas;
