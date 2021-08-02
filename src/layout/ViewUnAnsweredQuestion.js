import React, { Component } from 'react'

class DetailItemVote extends Component{
  state = {
    options : ''
  }

  handleChange = (e) => {
    const selectedOption = e.currentTarget.value;
    this.setState(() => ({
      options : selectedOption
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {saveAnsweredQuestion} = this.props;
    const {options} = this.state;
    saveAnsweredQuestion(options);
  }

  render(){
      const {question} = this.props;
      const {options} = this.state;
      return(
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h5 className='card-title'>Would you rather ?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type='radio'
                id='optionOneText'
                value='optionOneText'
                onChange={this.handleChange}
                name='answer'
                checked={options === 'optionOneText' ? true : false}>
              </input>
              <label
                className="form-check-label"
                htmlFor='optionOneText'>{question.optionOneText.text}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type='radio'
                id='optionTwoText'
                value='optionTwoText'
                onChange={this.handleChange}
                name='answer'
                checked={options === 'optionTwoText' ? true : false}>
              </input>
              <label
                className="form-check-label"
                htmlFor='optionTwoText'>{question.optionTwoText.text}
              </label>
            </div>
            <hr/>
            <button
              className='btn btn-primary'
              type='submit'
              disabled={options === ''}>Submit
            </button>
          </form>
        </div>
      )
  }
}

export default DetailItemVote
