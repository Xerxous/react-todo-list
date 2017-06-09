//have constants for action types
//action is an object that is returned by an action creator

// {
//   type: 'ADD_TODO', //every action has a type
//   text: 'data' //optional payload
// }

let actions = { //action creator
  addTodo: (text) => {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
  toggleTodo: (checked) => {
    return {
      type: 'TOGGLE_TODO',
      check: !checked
    }
  }
}

export default actions
