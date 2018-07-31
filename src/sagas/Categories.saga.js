import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  select,
} from 'redux-saga/effects';
import { getCatalog } from '../modules/ApiClient';
import {
  CATEGORY_FAILED,
  CATEGORY_REQUESTED,
  CATEGORY_SUCCEEDED,
} from '../constants/CategoryTypes';

export function* fetchCategory(action) {
  try {
    const data = yield call(getCatalog);
    yield put({ type: CATEGORY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: CATEGORY_FAILED, error });
  }
}

const categoriesSagas = all([takeEvery(CATEGORY_REQUESTED, fetchCategory)]);

export default categoriesSagas;
