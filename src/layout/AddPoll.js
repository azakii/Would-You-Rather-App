import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../redux/actions/sharedActions";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

class AddPoll extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    message: false,
  };

  handleChangeoptionOneText = (e) => {
    const optionOneText = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  };

  handleChangeoptionTwoText = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = (e) => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;
    e.preventDefault();
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      message: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, message } = this.state;
    if (message === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <Card>
              <Card.Header as="h5" className="text-left">
                Create a New Poll
              </Card.Header>
              <Card.Body>
              <form onSubmit={this.handleSubmit}>
                <Card.Text>Complete the question:</Card.Text>
                <Card.Title className="mb-3">Would you rather...</Card.Title>
                <Form.Control
                  type="text"
                  placeholder="Enter option one..."
                  value={optionOneText}
                  onChange={this.handleChangeoptionOneText}
                />

                <div className="row mt-3 mb-3">
                  <div className="col">
                    <hr />
                  </div>
                  <div className="col-auto">OR</div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter option two..."
                    value={optionTwoText}
                    onChange={this.handleChangeoptionTwoText}
                  />
                </div>
                <Button
                  type="submit"
                  variant="dark"
                  disabled={(optionOneText === '' || optionTwoText === '')}
                >
                  Submit
                </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(AddPoll);
