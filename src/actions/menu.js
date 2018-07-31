import { createAction } from 'redux-actions';
import { MENU_REQUESTED } from '../constants/MenuTypes';

export const requestMenu = createAction(MENU_REQUESTED);
