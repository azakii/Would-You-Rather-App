import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import "bootstrap/dist/css/bootstrap.min.css";

import { handleInitialData } from "./redux/actions/sharedActions";
import QuestionList from "./layout/QuestionList";
import newQuestions from "./layout/NewQuestions";
import Leaderboard from "./layout/Leaderboard";
import PageNotFound from "./layout/PageNotFound";
import Header from "./layout/shared/Header";
import Login from "./layout/Login";
import ViewItem from "./layout/ViewItem";


function mapStateToProps({ authedUser, users, questions }) {
  return {
    users,
    init:
      Object.keys(users).length > 0 && Object.keys(questions).length > 0,
      authorized: authedUser != null,
  };
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { init, authorized } = this.props;
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
           {(authorized && init) && (
            <React.Fragment>
              <Header />
              <Switch>
                <Route path="/" exact component={QuestionList} />
                <Route path="/addNewQuestion" exact component={newQuestions} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/question/:id" component={ViewItem} />
                <Route component={PageNotFound} />
              </Switch>
            </React.Fragment>
          )}
          {(!authorized && init) && 
            <Login />
          }
        </React.Fragment>
      </Router>
    );
  }
}



export default connect(mapStateToProps)(App);
