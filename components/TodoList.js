import React, { Component } from 'react'

class TodoList extends Component {

  render() {
    return (
      <div className="spaced">
        <ol>
          {
            this.props.todos.map((todo) => {
              return <li key={todo.id}>{todo.text}</li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default TodoList
