import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import AuthGuard from '../../components/AuthGuard';
import PostForm from './PostForm';
import { postApi, newPost } from '../../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.addNewPost = this.addNewPost.bind(this);
    this.gotoList = this.gotoList.bind(this);
  }

  addNewPost(vals) {
    this.props.savePost(vals);
    this.gotoList();
  }

  gotoList() {
    this.props.gotoList();
  }

  render() {
    return (
      <PostForm
        newPost={true}
        cancel={this.gotoList}
        onSubmit={this.addNewPost}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  gotoList: () => { dispatch(push('/posts')) },
  savePost: (data) => { dispatch(postApi('/posts', data, newPost)) }
})

export default AuthGuard(connect(null, mapDispatchToProps)(NewPost));