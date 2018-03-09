import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import EditPost from './EditPost';
import NewPost from './NewPost';

const Posts = () => (
  <Switch>
    <Route exact path="/posts" name="Posts" component={PostList}/>
    <Route path="/posts/new" name="New Post" component={NewPost}/>
    <Route path="/posts/:id" name="Edit Post" component={EditPost}/>
  </Switch>
)

export default Posts;