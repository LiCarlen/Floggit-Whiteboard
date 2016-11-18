import * as types from '../constants/action-types';

module.exports.addPostIt = postIts => ({
  type: types.ADD_POSTIT,
  data: postIts
});

module.exports.removePostIt = postIts => ({
  type: types.REMOVE_POSTIT,
  data: postIts
});

module.exports.displayAddPostItButton = () => ({
  type: types.DISPLAY_ADD_POSTIT_BUTTON
});

module.exports.displayAddPostItFrom = () => ({
  type: types.DISPLAY_ADD_POSTIT_FORM
});
