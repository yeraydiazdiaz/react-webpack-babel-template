import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import './setup'
import BasicComponent from '../src/components/basicComponent'

describe('<BasicComponent />', () => {
  it('starts with value == 0', () => {
    const wrapper = shallow(<BasicComponent />)
    expect(wrapper.find('p span').text()).to.equal('0')
  })

  it('has two buttons reading + and -', () => {
    const wrapper = shallow(<BasicComponent />)
    const buttons = wrapper.find('button')
    expect(buttons).to.have.length(2)
    expect(buttons.first().text()).to.equal('+')
    expect(buttons.last().text()).to.equal('-')
  })

  describe('clicking +', () => {
    it('increases value by 1', () => {
      const wrapper = shallow(<BasicComponent />)
      wrapper.find('button').first().simulate('click')
      expect(wrapper.find('p span').text()).to.equal('1')
    })
  })

  describe('clicking -', () => {
    it('decreases value by 1', () => {
      const wrapper = shallow(<BasicComponent />)
      wrapper.find('button').last().simulate('click')
      expect(wrapper.find('p span').text()).to.equal('-1')
    })
  })
})
