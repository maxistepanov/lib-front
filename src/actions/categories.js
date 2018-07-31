import { createAction } from 'redux-actions';
import { CATEGORY_REQUESTED } from '../constants/CategoryTypes';

export const requestCategory = createAction(CATEGORY_REQUESTED);
