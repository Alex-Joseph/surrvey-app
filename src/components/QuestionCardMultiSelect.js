import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle,
  FormGroup, Label, Input } from 'reactstrap';

class QuestionCardMultiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let options = this.props.qProps.options
    let optObj = {}
    for (const opt in options) {
      optObj[opt] = false
    }
    this.setState({ options: optObj })
  }

  handleCheckBox = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    if (value) { this.setState({alert: null}) }
    this.setState({ options: {...this.state.options, [name]: value } })
  }

  checkAnswers = () => {
    let options = this.state.options
    let props = this.props.qProps
    let qId = props.qId
    let ans = []
    for (const opt in options) {
      if (options[opt]) {
        ans.push(opt)
      }
    }
    if (ans.length < 1) {
      return this.setState({alert: '*Please selected at least one option'})
    }
    // clearing the options for the next multiSelect question
    this.setState({options: null})
    props.func(qId, ans)
  }
  render() {
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
                        name={opt}
                        type='checkbox'
                        onChange={this.handleCheckBox}
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

export default QuestionCardMultiSelect;
