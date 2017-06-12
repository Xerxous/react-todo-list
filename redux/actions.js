//have constants for action types
//action is an object that is returned by an action creator

// {
//   type: 'ADD_TODO', //every action has a type
//   text: 'data' //optional payload
// }
//
// differentiates the type of action, passed in through dispatch

let actions = { //action creator
  addTodo: (text) => {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
  completeTodo: (task) => {
    return {
      type: 'COMPLETE_TODO',
      completed: !task.completed,
      id: task.id
    }
  },
  deleteTodo: (task) => {
    return {
      type: 'DELETE_TODO',
      id: task.id
    }
  }
}

export default actions
