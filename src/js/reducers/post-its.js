import { ADD_POSTIT, REMOVE_POSTIT } from '../constants/action-types';

const initialState = [];

const reducer = (postItState = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      newState = [...postItState, newPostIt];
      return newState;
    }
    case REMOVE_POSTIT: {
      return postItState.filter(item => item.id !== action.data);
    }
    default: {
      return postItState;
    }
  }
};

export default reducer;
