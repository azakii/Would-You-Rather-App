import React, { Component } from "react";
import QuestionItem from "./QuestionItem";
import { connect } from "react-redux";

const SHOW_UNANSWERED = "SHOW_UNANSWERED";
const SHOW_ANSWERED = "SHOW_ANSWERED";

function mapStateToProps({ authedUser, questions }) {
  const questionsUnAnswered = Object.values(questions).filter(
    (question) =>
      !question.optionOneText.votes.includes(authedUser) &&
      !question.optionTwoText.votes.includes(authedUser)
  );
  const questionsAnswered = Object.values(questions).filter(
    (question) =>
      question.optionOneText.votes.includes(authedUser) ||
      question.optionTwoText.votes.includes(authedUser)
  );
  return {
    questionsUnAnswered, 
    questionsAnswered
  };
}

class Questions extends Component {
  state = { tab: SHOW_UNANSWERED };
  handleQuestion = (e) => {
    e.preventDefault();
    var switchtab = e.target.getAttribute("data-toggle");
    if (switchtab) {
      this.setState(() => ({
        tab: switchtab,
      }));
    }
  };

  render() {
    const { questionsUnAnswered, questionsAnswered } = this.props;
    const unansweredQuestions = Object.values(questionsUnAnswered)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((q) => q.id);
    const answeredQuestions = Object.values(questionsAnswered)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((q) => q.id);
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="btn-group mb-4 d-flex"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-secondary"
              id="toggleQuestionsUnAnswered"
              data-toggle={SHOW_UNANSWERED}
              onClick={this.handleQuestion}
              disabled={this.state.tab === SHOW_UNANSWERED}
            >
              Unanswered
              <span className="badge bg-danger ml-3 rounded-circle">
                {questionsUnAnswered.length}
              </span>
            </button>
            <button
              onClick={this.handleQuestion}
              type="button"
              className="btn btn-secondary"
              id="toggleQuestionsAnswered"
              data-toggle={SHOW_ANSWERED}
              disabled={this.state.tab === SHOW_ANSWERED}
            >
              Answered
              <span className="badge bg-danger ml-3 rounded-circle">
              {questionsAnswered.length}
                <span className="visually-hidden">New alerts</span>
              </span>

              
            </button>
          </div>
        
        {this.state.tab === SHOW_UNANSWERED && (
          <div id="questionsUnAnswered" className="p-4 border">
            {unansweredQuestions.map((id) => (
              <QuestionItem key={id} id={id} button='Vote' text='Unanswered' />
            ))}

            {questionsUnAnswered.length === 0 && (
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Perfect!</h4>
                <p>You answered all available questions</p>
              </div>
            )}
          </div>
        )}
        {this.state.tab === SHOW_ANSWERED && (
          <div id="questionsAnswered" className="p-4 border">
            {answeredQuestions.map((id) => (
              <QuestionItem key={id} id={id} button='View' text='Answered' />
            ))}
          </div>
        )}
        </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Questions);
