import { handleActions } from 'redux-actions';
import { MENU_SUCCESS } from '../constants/MenuTypes';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [MENU_SUCCESS]: (state, { data }) => data,
  },
  initialState,
);
