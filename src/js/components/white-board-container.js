import React from 'react';
import { connect } from 'react-redux';
import { addPostIt, removePostIt, displayAddPostItFrom, displayAddPostItButton } from '../actions';
import AddPostItButton from './post-it-add-form';
import AddPostItFrom from './add-post-it';
import PostItList from './post-it-list';

const WhiteBoardContainer = props => (
  <div className="container">
    <div className="header">
      <h1>Floggit</h1>
    </div>
    <div className="caption">
      <h2>Whiteboard</h2>
    </div>
    <PostItList
      className="post-it-list"
      postIts={props.postIts}
      onRemove={props.handleRemove}
      // onEdit={this.handleEdit}
    />
    <AddPostItButton
      isVisible={props.displayAddButton}
      showAddPostItForm={props.onDisplayAddPostItFrom}
    />
    <AddPostItFrom
      isVisible={props.displayAddForm}
      onAdd={props.handleAdd}
      onCancel={props.handleCancel}
    />
  </div>
);

const mapStateToProps = state => ({
  postIts: state.postIts,
  displayAddButton: state.ui.addButton.isVisible,
  displayAddForm: state.ui.addForm.isVisible
});

const mapDispatchToProps = dispatch => ({
  handleAdd: (postItInput) => {
    const newTitle = postItInput.title.value.trim();
    let newDesc = postItInput.desc.value.trim();
    const newBkColor = postItInput.bkColor;

    if (newDesc.length === 0) {
      newDesc = '';
    }
    if (newTitle.length > 0) {
      const postIts = {
        id: +(new Date()),
        title: newTitle,
        desc: newDesc,
        bkColor: newBkColor
      };
      dispatch(addPostIt(postIts));
    } else {
      alert('PostIt title cannot be empty!');
    }
  },
  handleRemove: (id) => {
    dispatch(removePostIt(id));
  },
  onDisplayAddPostItFrom: () => {
    dispatch(displayAddPostItFrom());
  },
  handleCancel: () => {
    dispatch(displayAddPostItButton());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteBoardContainer);
