import { DISPLAY_ADD_POSTIT_BUTTON, DISPLAY_ADD_POSTIT_FORM } from '../constants/action-types';

const initialState = {
  addButton: { isVisible: true },
  addForm: { isVisible: false }
};

const reducer = (uiState = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ADD_POSTIT_FORM: {
      return ({
        addButton: { isVisible: false },
        addForm: { isVisible: true }
      });
    }
    case DISPLAY_ADD_POSTIT_BUTTON: {
      return {
        addButton: { isVisible: true },
        addForm: { isVisible: false }
      };
    }
    default: {
      return initialState;
    }
  }
};

export default reducer;
