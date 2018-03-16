import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, UncontrolledAlert } from 'reactstrap';
import questions from './questions.js';
import QuestionCardRadio from './components/QuestionCardRadio.js';
import QuestionCardMultiSelect from './components/QuestionCardMultiSelect.js';
import QuestionCardTextInput from './components/QuestionCardTextInput.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      questionIds: null,
      questions: null,
      submitting: false,
      submission: []
    }
  }
  componentDidMount() {
// fetch call returns data in JSON format as "questions"
    this.setState({
      questionIds: Object.keys(questions),
      questions
    })
  }

  handleStart = () => {
    this.setState({question: 0})
  }

  handleAnswer = (qId, answer, details) => {
    let submission = this.state.submission
    let res = {[qId]: answer}
    if (details) {
      res.details = details
    }
    this.setState(prevState => ({
      submission: [...submission, res],
      question: prevState.question+1
    }))
  }

  handleSubmit = (qId, answer, details) => {
    let alert = "Questionaire Submitted, thank you for your participation"
    this.setState({ submitting: true })
    this.handleAnswer(qId, answer, details)
//  simulated fetch/post to server
    setTimeout(function() {
      this.setState({
        submitting: false,
        alert
      });
    }.bind(this), 2000)
  }

  createQuestion = (qNum) => {
    const qId = this.state.questionIds[qNum]
    const currentQ = this.state.questions[qId]
    const options = currentQ.options
    let buttonName = "Next"
    let func = this.handleAnswer
    if (qNum === this.state.questionIds.length-1) {
      buttonName = "Submit"
      func = this.handleSubmit
    }
    const qProps = { qId, currentQ, options, qNum, buttonName, func }
    let type = currentQ.type
    switch (type) {
      case 'multiSelect':
        return <QuestionCardMultiSelect qProps={qProps} />
      case 'selectTextInput':
        return <QuestionCardTextInput qProps={qProps} />
      case 'select':
        return <QuestionCardRadio qProps={qProps} />
      default:

    }
  }
  Coordinator = () => {
    const {question, questionIds} = this.state
    if (question === null) {
      return (
        <p className="App-intro">
          To begin the questionaire click{" "}
          <Button
            color="success"
            onClick={this.handleStart}>
            Get Started
          </Button>
        </p>
      )
    }
    if (question === questionIds.length) {
      return <h1>Questionaire Complete!</h1>
    }
    return this.createQuestion(question)
  }

  render() {
    let {Coordinator} = this
    let {alert} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Demo App</h1>
        </header>
        <span>
          {alert ?
            <UncontrolledAlert color="success">
              {alert}
            </UncontrolledAlert>
            : null}
        </span>
        <Coordinator />
      </div>
    );
  }
}

export default App;
