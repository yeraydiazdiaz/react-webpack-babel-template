/**
 * A sample component
 */

import React from 'react'

export default class BasicComponent extends React.Component {
  constructor (props) {
    super(props)
    // typically we'd bind methods here
  }

  componentDidMount () {
    // Initialisation code
  }

  render () {
    return <div>A basic component</div>
  }
};
