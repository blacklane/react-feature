/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Feature } from './index'

describe('<Feature>', () => {
  it('should render feature content if feature active', () => {
    const wrapper = shallow(<Feature name='test:feature' config={{'test:feature': true}}><p>content</p></Feature>)
    expect(wrapper.html()).toEqual('<div><p>content</p></div>')
  })

  it('should not render feature content if feature not active', () => {
    const wrapper = shallow(<Feature name='test:feature' config={{'test:feature': false}}><p>content</p></Feature>)
    expect(wrapper.html()).toBe(null)
  })

  it('should not render feature content if config empty', () => {
    const wrapper = shallow(<Feature name='test:feature' config={{}}><p>content</p></Feature>)
    expect(wrapper.html()).toBe(null)
  })
})
