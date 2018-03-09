import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Switch } from './Switch';

const PostForm = (props) => {
  const { newPost, handleSubmit, cancel } = props;

  return (
    <div className="card card-accent-info animated fadeIn">
      <form
        className="form-horizontal"
        onSubmit={handleSubmit}
      >
        <div className="card-header">
          {!newPost && <strong>Edit Post</strong>}
          {newPost && <strong>New Post</strong>}
        </div>
        <div className="card-block">
          <div className="form-group row">
            <label className="col-md-3 form-control-label" htmlFor="text-input">Title</label>
            <div className="col-md-9">
              <Field name="title" component="input" type="text" className="form-control" placeholder="Title" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 form-control-label" htmlFor="text-input">Tags</label>
            <div className="col-md-9">
              <Field name="tags" component="input" type="text" className="form-control" placeholder="Tags..." />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 form-control-label" htmlFor="textarea-input">Content</label>
            <div className="col-md-9">
              <Field name="content" component="textarea" rows="9" className="form-control" placeholder="Content..." />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-save"></i> Save</button>
          <button type="button" className="btn btn-sm btn-danger ml-2" onClick={cancel}><i className="fa fa-ban"></i> Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'postedit'
})(PostForm);
