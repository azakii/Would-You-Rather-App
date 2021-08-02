import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../redux/actions/authActions";
import img from "../assets/img/animals.png";
import Card from "react-bootstrap/Card";
import User from "./User";
import Dropdown from "react-bootstrap/Dropdown";


function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  };
}

class Login extends Component {
  handleLogin = (userId) => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(userId));
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <Card>
              <Card.Header as="h5" className="text-center">
                Welcome to the Would You Rather App!
                <p
                  style={{
                    color: "#333",
                    fontSize: 14,
                    marginTop: 15,
                    fontWeight: 300,
                    marginBottom: 5,
                  }}
                >
                  Please sign in to continue
                </p>
              </Card.Header>
              <Card.Body>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 mb-3 text-center">
                    <Card.Img variant="top" src={img} style={{ width: 400 }} />
                  </div>
                  <div className="col-md-12 text-center">
                    <form onSubmit={this.handleSubmit}>
                      <h3
                        style={{
                          textTransform: "upperCase",
                          color: "#198754",
                          marginTop: 15,
                        }}
                      >
                        Sign In
                      </h3>

                      <Dropdown className="mt-4 login text-left">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                          Please pick up a user to login
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {this.props.users.map((id) => (
                            <Dropdown.Item key={id} className="w-100">
                              <User id={id} handleLogin={this.handleLogin} />
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
