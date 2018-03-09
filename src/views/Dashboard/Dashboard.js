import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthGuard from '../../components/AuthGuard';
import { getApi, setCounts } from '../../actions';
import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllCounts();
  }

  render() {
    const {users, posts, tags} = this.props.counts

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block">
                <h4 className="mb-2">Statistics</h4>
                <div className="counter-row">
                  <span className="label">Users</span>
                  <span className="value">{ users }</span>
                </div>
                <div className="counter-row">
                  <span className="label">Posts</span>
                  <span className="value">{ posts }</span>
                </div>
                <div className="counter-row">
                  <span className="label">Tags</span>
                  <span className="value">{ tags }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counts: state.counts
})

const mapDispatchToProps = (dispatch) => ({
  getAllCounts: () => { dispatch(getApi('/counts', setCounts)) }
})

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default AuthGuard(ConnectedDashboard);
