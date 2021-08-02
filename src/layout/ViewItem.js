import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnsweredQuestion } from "../redux/actions/sharedActions";
import ViewQuestion from "./ViewAnsweredQuestion";
import DetailItemVote from "./ViewUnAnsweredQuestion";
import Card from "react-bootstrap/Card";
import PageNotFound from './PageNotFound';

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const questionExists = !question ? false : true;
  const answered = !!question
    ? question.optionOneText.votes.includes(authedUser) ||
      question.optionTwoText.votes.includes(authedUser)
    : false;
  const vote = answered
    ? question.optionOneText.votes.includes(authedUser)
      ? "optionOneText"
      : "optionTwoText"
    : null;
  const user = users && question ? users[question.author] : null;
  return {
    id,
    authedUser,
    question,
    questionExists,
    answered,
    user,
    vote,
  };
}

class ViewItem extends Component {
  saveAnsweredQuestion = (selectedOption) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAddAnsweredQuestion(authedUser, id, selectedOption));
  };
  render() {
    const { question, questionExists, answered, user, vote } = this.props;
    if (questionExists) {
      return (
        <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card mb-12">
          <Card.Header as="h5" className="text-left">
           {user.name} asks:
          </Card.Header>
          <Card.Body>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="col-md-12">
                <Card.Img
                  variant="top"
                  src={`../${user.avatarURL}`}
                  alt={user.name}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {answered && (
                  <ViewQuestion question={question} vote={vote} />
                )}
                {!answered && (                    
                  <DetailItemVote
                    question={question}
                    saveAnsweredQuestion={this.saveAnsweredQuestion}
                  />
                )}
              </div>
            </div>
          </div>
          </Card.Body>
        </div>
        </div>
        </div>
        </div>
      );
    } else {
      return <div>
        <PageNotFound />
      </div>;
    }
  }
}

export default connect(mapStateToProps)(ViewItem);
