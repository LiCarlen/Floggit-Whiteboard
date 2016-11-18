import React from 'react';

const PostItItem = (props) => {
  function handleDelete() {
    if (confirm('Are you sure if you want to delete it')) {
      props.onRemove(props.id);
    }
  }
  function handleEdit() {
    props.onEdit(props.id);
  }
  return (
    <li
      className={`list-group-item box ${props.bkColor}`}
    >
      <p>title: {props.title}</p>
      Description: {props.desc}
      <div className="item-button">
        <button className="btn btn-primary btn-sm" onClick={handleEdit}>Edit</button>
        <button className="btn btn-primary btn-sm" onClick={handleDelete}>Delete</button>
        {/* <button className="btn btn-info" onClick={function()  */}
        {/* {alert('Gjör om! Gjör rätt!!!')}}>Edit</button> */}
      </div>
    </li>
  );
};

PostItItem.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const PostItList = props => (<ul className="list-group">{
    props.postIts.map(postItItem => (
      <PostItItem
        key={postItItem.id}
        id={postItItem.id}
        title={postItItem.title}
        desc={postItItem.desc}
        bkColor={postItItem.bkColor}
        onRemove={props.onRemove}
        onEdit={props.onEdit}
      />
  ))
}</ul>);

PostItList.propTypes = () => ({
  postIts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      desc: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default PostItList;
