import React, { Component } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Clear } from './components/Clear'
import { Input } from './components/Input'
import * as math from 'mathjs'
import axios from 'axios'

class App extends Component {
  state = {
    input: "0",
    previous: "0"
  }

  componentDidMount() {
    this.loadValues()
  }

  loadValues = () => {
    axios.get("/total").then(res => this.setState({ input: res.data }))
    axios.get("/previous").then(res => this.setState({ previous: res.data }))
  }

  handleClick = (val) => {
    this.setState({ input: this.state.input + val })
  }

  handleClear = () => {
    axios.post(`/newtotal?newTotal="0"`)
    axios.post(`/newtotal?newTotal="0"`)
    this.loadValues()
  }

  handleEqual = async () => {
    let answer = await math.evaluate(this.state.input)
    this.setState({ input: answer })
    axios.post(`/newtotal?newTotal=${this.state.input}`).then(this.loadValues())
  }

  render() {
    return (
      <div className="App">
        <div className = "calc">
          <Input input = {this.state.input} previous = {this.state.previous} />
          <div className = "row">
            <Button handleClick = {this.handleClick}>7</Button>
            <Button handleClick = {this.handleClick}>8</Button>
            <Button handleClick = {this.handleClick}>9</Button>
            <Button handleClick = {this.handleClick}>/</Button>

          </div>
          <div className = "row">
            <Button handleClick = {this.handleClick}>4</Button>
            <Button handleClick = {this.handleClick}>5</Button>
            <Button handleClick = {this.handleClick}>6</Button>
            <Button handleClick = {this.handleClick}>*</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.handleClick}>1</Button>
            <Button handleClick = {this.handleClick}>2</Button>
            <Button handleClick = {this.handleClick}>3</Button>
            <Button handleClick = {this.handleClick}>+</Button>
          </div>
          <div className = "row">
            <Button handleClick = {this.handleClick}>.</Button>
            <Button handleClick = {this.handleClick}>0</Button>
            <Button handleClick = {this.handleEqual}>=</Button>
            <Button handleClick = {this.handleClick}>-</Button>
          </div>
          <div className = "row">
            <Clear handleClear = {this.handleClear}>Clear</Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;