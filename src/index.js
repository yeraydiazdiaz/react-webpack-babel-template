/**
 * Entry point.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Store from './store'
import BasicComponent from './components/basicComponent'

const store = new Store()
const rootElement = document.getElementById('app')
const data = rootElement.getAttribute('data')
const config = data ? JSON.parse(data) : {}

ReactDOM.render(
  <Provider store={store}>
    <BasicComponent {...config} />
  </Provider>,
  document.getElementById('app')
)
