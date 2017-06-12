import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  render() {
    return (
      <div className="spaced">
        <ol>
          {
            this.props.todos.map((todo) => {
              return <TodoItem key={todo.id} dispatch={this.props.dispatch} task={todo}/>
            })
          }
        </ol>
      </div>
    )
  }
}

export default TodoList
