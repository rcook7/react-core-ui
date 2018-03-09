import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';

const AuthGuard = (WrappedComponent) => {
  const HoCComponent = (props) => (
    props.shouldRedirect ? (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    ) : (
      <WrappedComponent
        {...props}
      />
    )
  )

  const mapStateToProps = (state) => ({
    shouldRedirect: !state.token
  })

  return withRouter(connect(mapStateToProps)(HoCComponent));
}

export default AuthGuard;