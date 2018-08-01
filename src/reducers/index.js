import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';
import menu from './menu';

const rootReducer = combineReducers({
  counter,
  menu,
  posts,
});

export default rootReducer;
