import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import AuthGuard from '../../components/AuthGuard';
import { getApi, setPosts, deleteApi, deletePost } from '../../actions';
import { convertDate } from '../../utils';

const Card = ({
  title,
  content,
  user,
  updated,
  _id,
  view,
  deletePost
}) => (
  <div className="col-sm-6 col-md-4 post-card">
    <div className="card card-accent-info">
      <Link to={`/posts/${_id}`}>
        <div className="card-header">
          <h4>{ title }</h4>
          <div>by { user }</div>
          <div>{ convertDate(updated) }</div>
        </div>
        <div className="card-block">
          { content }
          <div className="shader"></div>
        </div>
      </Link>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => deletePost(_id)}><i className="fa fa-trash-o"></i></button>
      </div>
    </div>
  </div>
)

class PostList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  deletePost(id) {
    this.props.deletePost(id);
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="animated fadeIn">
        <div className="row mb-3">
          <div className="col-12">
            <Link to={'/posts/new'} className="btn btn-primary">Add New</Link>
          </div>
        </div>
        <div className="row">
          {
            posts.map(post => (
              <Card
                key={post._id}
                {...post}
                deletePost={this.deletePost}
              >
              </Card>
            ))
          }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => { dispatch( getApi('/posts', setPosts) ) },
  deletePost: (id) => { dispatch( deleteApi('/posts/'+id, deletePost) ) },
  gotoEdit: (id) => { dispatch( push(`/posts/${id}`) ) }
})

export default AuthGuard(connect(mapStateToProps, mapDispatchToProps)(PostList));
