import React, {Component} from "react";
import { connect } from "react-redux";
import LeaderboardCard from "./LeaderboardCard";

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  const userIdswithSorted = userIds.sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    userIdswithSorted,
  };
}

class LeaderBoard extends Component {
  render() {
    const { userIdswithSorted } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            {userIdswithSorted.map((id)=>(
              <LeaderboardCard id={id} key={id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);
