import { handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import { MENU_SUCCESS } from '../constants/MenuTypes';
import { menuSchema } from '../normalize/menu.normalize';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [MENU_SUCCESS]: (state, { data }) => {
      const normalized = normalize(data, menuSchema);
      return {
        ...data,
        normalized,
      };
    },
  },
  initialState,
);
