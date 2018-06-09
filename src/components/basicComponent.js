/**
 * A sample component
 */

import React from 'react'
import { hot } from 'react-hot-loader'

class BasicComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  addValue (n) {
    this.setState({value: this.state.value + n})
  }

  render () {
    return <div>
      <h2>A basic component</h2>
      <p>
        <span style={{marginRight: '5em'}}>{this.state.value}</span>
        <button onClick={this.addValue.bind(this, 1)}>+</button>
        <button onClick={this.addValue.bind(this, -1)}>-</button>
      </p>
    </div>
  }
}

export default hot(module)(BasicComponent)
