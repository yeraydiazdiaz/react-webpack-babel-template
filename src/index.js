/**
 * Entry point.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import BasicComponent from './components/basicComponent'

const rootElement = document.getElementById('app')
const config = JSON.parse(rootElement.getAttribute('data'))

ReactDOM.render(
  <BasicComponent {...config} />,
  document.getElementById('app')
)
