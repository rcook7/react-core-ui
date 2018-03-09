import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions';

let RegisterForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <p className="text-muted">Create your account</p>
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-addon"><i className="icon-user"></i></span>
          <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
        </div>
      </div>
    
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-addon"><i className="icon-lock"></i></span>
          <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
        </div>
      </div>
      <button type="submit" className="btn btn-block btn-success">Create Account</button>
      <Link to={'/login'} className="btn btn-link px-0">Already have an account? Login here</Link>
    </form>
  )
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.register(vals.username, vals.password);
  }

  render() {
    const { apiStatus } = this.props;

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <RegisterForm onSubmit={this.handleSubmit} />
                  {
                    apiStatus === 'register_failed' &&
                      <div className="errors">
                        Register Failed
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiStatus: state.api.status
})

const mapDispatchToProps = (dispatch) => ({
  register: (username, password) => { dispatch(register(username, password)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
