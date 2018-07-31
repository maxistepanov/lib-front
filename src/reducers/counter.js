import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = 0;

export default handleActions(
  {
    INCREMENT_COUNTER: (state, { payload }) => state + 1,

    DECREMENT_COUNTER: (state) => state - 1,
  },
  initialState,
);
