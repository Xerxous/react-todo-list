import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault() //so that the page doesn't refresh
    if(this.state.inputText) {
      this.props.dispatch(actions.addTodo(this.state.inputText))
      this.setState({
        inputText: ''
      })
    }
  }

render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Type in your todo"
              className="form-control"
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}
            />
            <input type="submit" className="form-control btn btn-success"/>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoInput
