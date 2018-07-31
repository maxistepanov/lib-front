import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  select,
} from 'redux-saga/effects';
import { getMenu } from '../modules/ApiClient';
import {
  MENU_FAILED,
  MENU_REQUESTED,
  MENU_SUCCEEDED,
} from '../constants/MenuTypes';

export function* fetch(action) {
  try {
    console.log('fetch');
    const data = yield call(getMenu);
    console.log('data', data);
    yield put({ type: MENU_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: MENU_FAILED, error });
  }
}

const sagas = all([takeEvery(MENU_REQUESTED, fetch)]);

export default sagas;
