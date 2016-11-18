import { combineReducers } from 'redux';
import postIts from './post-its';
import ui from './ui';

const reducer = combineReducers({
  postIts,
  ui
});

export default reducer;
