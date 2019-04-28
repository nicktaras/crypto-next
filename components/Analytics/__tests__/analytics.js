/* eslint-env jest */
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Analytics from './../analytics.jsx';
jest.mock("react-ga")

// A simple snapshot test and child element length test to ensure that the analytics
// component can render child elements

describe('With Enzyme', () => {
  it('should have the child props', () => {
    const wrapper = shallow(<Analytics><p>Hello</p><p>World</p></Analytics>, {});
    expect(wrapper.find('p')).toHaveLength(2);
  })
})

describe('With Snapshot Testing', () => {
  it('should have rendered the child elements', () => {
    const component = renderer.create(<Analytics><p>Hello World</p></Analytics>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
