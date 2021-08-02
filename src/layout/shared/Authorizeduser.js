import React, { Component } from "react";
import { notAuthedUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";


function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}


class Authorizeduser extends Component {

  //logout
  logOut = (e) => {
    const { dispatch, authedUser } = this.props;
    const authorized = authedUser !== null;
    if (authorized) {
      dispatch(notAuthedUser());
      return;
    }
  };


  render() {
    const { user } = this.props;
    const authorized = !!user ? true : false;
    return (
      <React.Fragment>
                  {(user && authorized) && (
                    <React.Fragment>
                      <div className="navbar-brand  d-inline-block">
                      <img
                          src={user.avatarURL}
                          width="auto"
                          height="30px"
                          className="d-inline-block align-top mr-3"
                          alt=""
                        />  <span className="username">{user.name}</span>
                        
                      </div>
                      <button className="btn btn-danger d-inline-block text-white" onClick={this.logOut}>
                        Logout
                      </button>
                    </React.Fragment>
                  )}
      </React.Fragment>
    );
  }

}


export default connect(mapStateToProps)(Authorizeduser);
