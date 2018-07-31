import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    MENU_SUCCEEDED: (state, { payload }) => state + 1,
  },
  initialState,
);
