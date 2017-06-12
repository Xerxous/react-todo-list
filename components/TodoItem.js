import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {

  handleDelete(event) {
    event.preventDefault()
    this.props.dispatch(actions.deleteTodo(this.props.task))
  }

  handleComplete(event) {
    event.preventDefault()
    this.props.dispatch(actions.completeTodo(this.props.task))
  }

  render() {
    return (
      <div>
        <p>{this.props.task.text}</p>
        <p>{this.props.task.completed.toString()}</p>
        <button onClick={this.handleComplete.bind(this)}>Complete Todo</button>
        <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </div>
    )
  }
}

export default TodoItem
