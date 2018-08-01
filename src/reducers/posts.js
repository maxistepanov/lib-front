import { handleActions } from 'redux-actions';
import { POSTS_SUCCESS } from 'constants/PostsTypes';
import { normalize } from 'normalizr';
import { postSchema } from 'normalize/post.normalize';

const initialState = {
  data: [],
  normalized: {
    result: [],
    entities: [],
  },
};

export default handleActions(
  {
    [POSTS_SUCCESS]: (state, { data }) => {
      const normalized = normalize(data.data, postSchema);
      return {
        ...data,
        normalized,
      };
    },
  },
  initialState,
);
