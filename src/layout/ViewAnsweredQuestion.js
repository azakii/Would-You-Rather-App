import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewQuestion extends Component {
  render() {
    const { question, vote } = this.props;
    const votesQuestion1 = question.optionOneText.votes.length;
    const votesQuestion2 = question.optionTwoText.votes.length;
    const amountOfAnswers = votesQuestion1 + votesQuestion2;
    const percentageVote1 =
      votesQuestion1 === 0
        ? 0
        : Math.round((votesQuestion1 / amountOfAnswers) * 100);
    const percentageVote2 =
      votesQuestion2 === 0
        ? 0
        : Math.round((votesQuestion2 / amountOfAnswers) * 100);
    const percentage1 = { width: `${percentageVote1}%` };
    const percentage2 = { width: `${percentageVote2}%` };
    return (
      <div>
        <h4 className="card-title">Would you rather ?</h4>
        <h6 className="card-text">
          {question.optionOneText.text}{" "}
          {vote === "optionOneText" && (
            <span className="badge bg-danger">Your choice</span>
          )}
        </h6>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={percentage1}
          ></div>
        </div>
        <p>People who voted : {votesQuestion1}</p>
        <p><b>{percentageVote1}%</b></p>

        <hr />
        
        <h6 className="card-text">
          {question.optionTwoText.text}{" "}
          {vote === "optionTwoText" && (
            <span className="badge bg-danger">Your choice</span>
          )}
        </h6>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={percentage2}
          ></div>
        </div>
        <p>People who voted : {votesQuestion2}</p>
        <p><b>{percentageVote2}%</b></p>
        
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    );
  }
}

export default ViewQuestion;
