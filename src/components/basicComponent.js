/**
 * A sample component
 */

import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

const BasicComponent = inject('store')(observer(
  class BasicComponent extends React.Component {
    static propTypes = {
      store: PropTypes.object
    }

    addValue (n) {
      this.props.store.addValue(n)
    }

    render () {
      return <div>
        <h2>A basic component</h2>
        <p>{this.props.store.value}</p>
        <button onClick={this.addValue.bind(this, 1)}>+</button>
        <button onClick={this.addValue.bind(this, -1)}>-</button>
      </div>
    }
  }
))

export default BasicComponent
