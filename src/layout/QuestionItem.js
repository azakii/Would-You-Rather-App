import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";


function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    user: users[question.author],
    question,
  };
}

class QuestionItem extends Component {
  render() {
    const { question, user, id, button, text } = this.props;
    const { optionOneText, optionTwoText } = question;

    return (
      <React.Fragment>
        <Card>
          <Card.Header as="h5" className="text-left">
           {user.name} {text}:
          </Card.Header>
          <Card.Body>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-4">
                <Card.Img
                  variant="top"
                  src={user.avatarURL}
                  alt={user.name}
                />
              </div>
              <div className="col-md-8">
                <Card.Title>Would you rather ?</Card.Title>
                <Card.Text>
                  {optionOneText.text}
                </Card.Text>
                <Card.Text>
                  {optionTwoText.text}
                </Card.Text>
                <Link
                  className="btn btn-dark"
                  to={`/questions/${id}`}
                >
                  {button}
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}


export default withRouter(connect(mapStateToProps)(QuestionItem));
