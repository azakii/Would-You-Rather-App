import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

class User extends Component {

  handleClick = (e) => {
    const { id, handleLogin } = this.props;
    handleLogin(id);
  };

  render() {
    const { user, handleLogin } = this.props;
    const { name } = user;
    return (
      <React.Fragment>
        {handleLogin && (
          <React.Fragment>
            <button className="btn btn-transparent font-weight-bold float-left" onClick={this.handleClick}>
              <img width={50} height={50} src={user.avatarURL} className="roundedCircle thumbnail mr-2" alt={name}/> {name}
            </button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(User);
