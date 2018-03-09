import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthGuard from '../../components/AuthGuard';
import { getApi, setPosts, putApi, editPost } from '../../actions';
import PostForm from './PostForm';
import SinglePost from './SinglePost';

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      postsFetched: false,
    }

    this.changeMode = this.changeMode.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentDidMount() {
    if (!this.props.post && !this.state.postsFetched) {
      this.props.getPosts();
    }
  }

  changeMode() {
    this.setState({
      edit: !this.state.edit
    });
  }

  savePost(vals) {
    this.props.savePost({
      ...this.props.post,
      ...vals
    });
    this.changeMode();
  }

  render() {
    if (!this.props.post) {
      return <div>This is not a valid post.</div>;
    } else {
      const { edit } = this.state;

      if (!edit) {
        return <SinglePost {...this.props.post} editPost={this.changeMode} />
      } else {
        const { title, tags, content} = this.props.post;
        return (
          <PostForm
            newPost={false}
            cancel={this.changeMode}
            initialValues={{title, tags, content}}
            onSubmit={this.savePost}
          />
        )
      }
    }
  }
}

const getPostById = (posts, id) => {
  return posts.filter(post => post._id === id)[0];
}

const mapStateToProps = (state, ownProps) => ({
  post: getPostById(state.posts, ownProps.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => { dispatch( getApi('/posts', setPosts) ) },
  savePost: (data) => { dispatch( putApi('/posts/'+data._id, data, editPost) ) }
})

export default AuthGuard(connect(mapStateToProps, mapDispatchToProps)(EditPost));