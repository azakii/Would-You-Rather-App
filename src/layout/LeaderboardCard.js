import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";


function mapStateToProps({authedUser, users},{id}){
  const user = users[id]
  return {
    user,
  }
}

class LeaderboardCard extends Component {
  render() {
      const { user} = this.props
    const { name, avatarURL, answers, questions} = user
    const answered = Object.keys(answers).length;
    const asked = questions.length;
    const sum = answered + asked;

    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
            <Card>
              
              <Card.Body>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-3">
                    <Card.Img
                      variant="top"
                      src={avatarURL}
                    />
                  </div>
                  <div className="col-md-6">
                    <Card.Header
                      as="h5"
                      className="text-left bg-transparent mb-3"
                    >
                      {name}
                    </Card.Header>
                    <Card.Text>
                      Answered questions : {answered}
                    </Card.Text>
                     <Card.Text>
                      Created questions : {asked}
                    </Card.Text>
                    
                  </div>
                  <div className="col-md-3">
                    
              <Card>
              <Card.Header as="h5" className="text-center">
               Score 
              </Card.Header>
              <Card.Body className="text-center font-weight-bold">
               {sum}
              </Card.Body>

               </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
    );
  }
}


export default connect(mapStateToProps)(LeaderboardCard);
