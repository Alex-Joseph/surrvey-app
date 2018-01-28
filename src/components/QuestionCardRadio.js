import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle,
  FormGroup, Label, Input } from 'reactstrap';

class QuestionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleRadio = (event) => {
    const value = event.target.value;
    this.setState({selected: value, alert: null})
  }

  checkAnswers = () => {
    let ans = this.state.selected
    let props = this.props.qProps
    let qId = props.qId
    if (!ans) {
      return this.setState({alert: '*Please selected an option'})
    }
    // clearing the answer for the next question
    this.setState({selected: null})
    return props.func(qId, ans)
  }
  render() {
    console.log("rendering qCard comp",this.state)
    let props = this.props.qProps
    let qNum = props.qNum+1
    let {alert} = this.state
    return (
      <div>
        <Card className="questionCard">
          <CardHeader>Question {qNum}</CardHeader>
          <CardBody>
            <CardTitle>{props.currentQ.question}</CardTitle>
            <FormGroup className="questionOptions">
              {Object.keys(props.options).map(opt => {
                return (
                  <FormGroup key={opt} check>
                    <Label check>
                      <Input
                        name='action'
                        value={opt}
                        type='radio'
                        onChange={this.handleRadio}
                        />{' '}
                        {props.options[opt]}
                      </Label>
                    </FormGroup>
                  )
                })}
              </FormGroup>
            </CardBody>
            <CardFooter className='CardFooter'>{alert ? alert : null}</CardFooter>
          </Card>
          <Button onClick={this.checkAnswers}>{props.buttonName}</Button>
      </div>
      )
  }
}

export default QuestionCard;
