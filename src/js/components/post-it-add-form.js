import React from 'react';

const PostItAddForm = (props) => {
  if(props.isVisible) {
    return (
      <div className="post-it-add-form">
        <button type="button" className="btn btn-primary btn-lg" onClick={props.showAddPostItForm}>Add a card</button>
      </div>
    );
  }
  return null;
};

export default PostItAddForm;
