/* eslint-env jest */
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../header.jsx'

describe('With Enzyme', () => {
  it('should have the correct logo path', () => {
    const app = shallow(<Header />)
    expect(app.find('img').prop("src")).toEqual('./../static/logo.svg')
  })
})

describe('With Snapshot Testing', () => {
  it('should have the logo svg within the header', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
