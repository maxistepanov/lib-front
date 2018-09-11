import { handleActions } from 'redux-actions';
import { POSTS_SUCCESS } from 'constants/PostsTypes';

const initialState = {};

export default handleActions(
  {
    [POSTS_SUCCESS]: (state, { data }) => {
      return {
        ...data,
      };
    },
  },
  initialState,
);
