import React from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from '../../utils';

const SinglePost = ({
  title, content, user, updated, _id, editPost
}) => (
  <div className="animated fadeIn">
    <div className="card card-accent-info view">
      <div className="card-header">
        <h4>{ title }</h4>
        <div>by { user }</div>
        <div>{ convertDate(updated) }</div>
      </div>
      <div className="card-block">
        { content }
      </div>
      <div className="card-footer">
        <button className="btn btn-primary mr-2" onClick={editPost}><i className="icon-pencil"></i> Edit</button>
        <Link to={"/posts"} className="btn btn-secondary">Back</Link>
      </div>
    </div>
  </div>
)

export default SinglePost;