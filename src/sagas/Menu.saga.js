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
  MENU_SUCCESS,
} from '../constants/MenuTypes';

export function* fetch(action) {
  try {
    const data = yield call(getMenu);
    yield put({ type: MENU_SUCCESS, data });
  } catch (error) {
    yield put({ type: MENU_FAILED, error });
  }
}

const sagas = all([takeEvery(MENU_REQUESTED, fetch)]);

export default sagas;
