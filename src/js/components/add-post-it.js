import React from 'react';

const AddPostIt = (props) => {
  const postItInput = {
    bkColor: 'yellow'
  };

  function addPostIt() {
    props.onAdd(postItInput);
    postItInput.title.value = '';
    postItInput.title.focus();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addPostIt();
    }
  }

  function handleClick() {
    addPostIt();
  }

  function colorHandler(event) {
    postItInput.bkColor = event.target.value;
  }

  if (props.isVisible) {
    return (
      <div className="col-lg-6">
        <div className="well bs-component">
          <form className="form-horizontal">
            <fieldset>
              <legend>Post-it</legend>
              <div className="form-group">
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    id="title"
                    type="text"
                    placeholder="Post-it title"
                    ref={(c) => {
                      postItInput.title = c;
                    }}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    id="desc"
                    type="text"
                    placeholder="Add extra info"
                    ref={(c) => {
                      postItInput.desc = c;
                    }}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10">
                  <select className="form-control" id="select" defaultValue="yellow" onChange={colorHandler}>
                    <option value="yellow">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                  <button type="button" className="btn btn-success" onClick={handleClick}>Save</button>
                  <button type="button" className="btn btn-success" onClick={props.onCancel}>Cancel</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
  return null;
};

export default AddPostIt;
