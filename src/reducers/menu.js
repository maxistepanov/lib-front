import { handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import { MENU_SUCCESS } from '../constants/MenuTypes';
import { mainSchema } from '../normalize/main.normalize';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [MENU_SUCCESS]: (state, { data }) => {
      const normalized = normalize(data, mainSchema);
      return {
        ...data,
        normalized,
      };
    },
  },
  initialState,
);
