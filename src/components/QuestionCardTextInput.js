import React, { Component } from 'react';
import { Button, Card, CardHeader, CardFooter, CardBody, CardTitle, Collapse,
  FormGroup, Label, Input } from 'reactstrap';

class QuestionCardTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {collapse: false}
  }

  handleRadio = (event) => {
    const value = event.target.value;
    if (event.target.id === "Yes") {
      return this.setState({collapse: true, selected: value, alert: null})
    }
    this.setState({selected: value, alert: null, collapse: false})
  }

  checkAnswers = () => {
    let ans = this.state.selected
    let details = this.state.details || null
    let props = this.props.qProps
    let qId = props.qId
    if (!ans) {
      return this.setState({alert: '*Please selected an option'})
    }
    // clearing the answer for the next question
    props.func(qId, ans, details)
    this.setState({selected: null, collapse: false})
  }
  handleDetails = (e) => {
    this.setState({details: e.target.value})
  }
  focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    document.getElementById("detailsText").focus();
  }
  addTextInput = (props) => {
    return (
      <Collapse isOpen={this.state.collapse} onEntered={this.focusTextInput}>
        <br></br>
        <Label className="detailsInput">Please provide more details
          <Input
            id="detailsText"
            type="textarea"
            value={this.state.details}
            onChange={this.handleDetails}
          />
        </Label>
      </Collapse>
    )
  }
  render() {
    console.log("rendering qCard comp",this.state)
    let props = this.props.qProps
    let qNum = props.qNum+1
    let {alert} = this.state
    let AddTextInput = this.addTextInput
    return (
      <div>
        <Card className="questionCard">
          <CardHeader>Question {qNum}</CardHeader>
          <CardBody>
            <CardTitle>{props.currentQ.question}</CardTitle>
            <FormGroup className="questionOptions">
              {Object.keys(props.options).map(opt => {
                let alias = props.options[opt]
                return (
                  <FormGroup key={opt} check>
                    <Label check>
                      <Input
                        id={alias}
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
              <AddTextInput />
              </FormGroup>
            </CardBody>
            <CardFooter className='CardFooter'>{alert ? alert : null}</CardFooter>
          </Card>
          <Button onClick={this.checkAnswers}>{props.buttonName}</Button>
      </div>
      )
  }
}

export default QuestionCardTextInput;
