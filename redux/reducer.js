function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          //add new todo info
          text: action.text,
          completed: action.checked,
          id: getId(state)
        }, ...state.todos] //spread: adds the rest of the todos in the state obj
      })//combines two objects into
    break
    default:
      return state
    break
  }
}

export default reducer
