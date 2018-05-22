import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import './setup'
import BasicComponent from '../src/components/basicComponent'

spy(BasicComponent.prototype, 'componentDidMount')

describe('<BasicComponent />', () => {
  it('calls componentDidMount', () => {
    mount(<BasicComponent />)
    expect(BasicComponent.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})
