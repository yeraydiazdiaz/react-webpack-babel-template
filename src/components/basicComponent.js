/**
 * A sample component
 */

import React from 'react'

export default class BasicComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.addOne = this.addValue.bind(this, 1)
    this.substractOne = this.addValue.bind(this, -1)
  }

  addValue (n) {
    this.setState({value: this.state.value + n})
  }

  render () {
    return <div>
      <h2>A basic component</h2>
      <p>{this.state.value}</p>
      <button onClick={this.addOne}>+</button>
      <button onClick={this.substractOne}>-</button>
    </div>
  }
};
