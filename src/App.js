import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return <div>
      <h1>Counter App</h1>
      <p>{`Count: ${this.state.count}`}</p>
      <button onClick={() => this.setState((state) => {
        return { count: state.count + 1 }
      }
      )}>Increment</button>
      <button onClick={() => this.setState((state) => {
        return { count: state.count - 1 }
      }
      )}>Decrement</button>
    </div>
  }
}

export default App