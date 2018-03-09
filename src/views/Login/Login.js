import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions';

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p className="text-muted">Sign In to your account</p>
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-addon"><i className="icon-user"></i></span>
          <Field name="username" component="input"  type="text" className="form-control" placeholder="Username" />
        </div>
      </div>
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-addon"><i className="icon-lock"></i></span>
          <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button type="submit" className="btn btn-primary px-4">Login</button>
        </div>
        <div className="col-6 d-md-up-none text-sm-right">
          <Link to={'/register'} className="btn btn-link px-0">Register here</Link>
        </div>
      </div>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    const { username, password } = vals;

    this.props.authenticate(username, password);
  }

  render() {
    const { apiStatus } = this.props;

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <LoginForm onSubmit={this.handleSubmit} />
                    {
                      apiStatus === 'auth_failed' &&
                        <div className="errors mt-3">
                          Login Failed
                        </div>
                    }
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <Link to={"/register"} className="btn btn-primary active mt-3">Register Now!</Link>
                    </div>
                  </div>
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
  authenticate: (username, password) => { dispatch(login(username, password)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
