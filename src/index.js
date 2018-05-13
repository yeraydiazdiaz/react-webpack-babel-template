/**
 * Entry point.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import BasicComponent from './components/basicComponent'

const rootElement = document.getElementById('app')
const data = rootElement.getAttribute('data')
const config = data ? JSON.parse(data) : {}

ReactDOM.render(
  <BasicComponent {...config} />,
  document.getElementById('app')
)
