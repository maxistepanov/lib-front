import { combineReducers } from 'redux';
import counter from './counter';
import menu from './menu';

const rootReducer = combineReducers({
  counter,
  menu,
});

export default rootReducer;
