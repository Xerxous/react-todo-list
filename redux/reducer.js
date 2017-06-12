import _ from 'lodash'
// Reducer: returns the entire state, modify state according to the action

function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, {
          //add new todo info
          text: action.text,
          completed: false,
          id: getId(state)
        }] //spread: adds the rest of the todos in the state obj
      })//combines two objects into
    break
    case 'COMPLETE_TODO':
      state.todos[action.id].completed = action.completed
      return Object.assign({}, state, {
        todos: [...state.todos]
      })
    break
    case 'DELETE_TODO':
    let todos = []
    state.todos.map((todo) => {
      if (todo.id != action.id) {
        todos.push(todo)
      }
    })
    return Object.assign({}, state, {
      todos
    })
    default:
      return state
    break
  }
}

export default reducer
