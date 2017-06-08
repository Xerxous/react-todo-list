import React, { Component } from 'react'
import TextInput from './TextInput.js'

class App extends Component {

  render() { //can only have one top level element(cannot have two sibling components)
    return (
      <div className="app">
        <TextInput />
      </div>
    )
  }
}

export default App
