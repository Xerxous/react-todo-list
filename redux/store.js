import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

// TODO: add middleware
// let finalCreateStore = compose(
//     applyMiddleware(createLogger())
// )(createStore)

export default function configureStore(initialState = { todos: [] }) {
  // return finalCreateStore(reducer, initialState)
  return createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
