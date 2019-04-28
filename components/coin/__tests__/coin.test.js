/* eslint-env jest */
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Coin from '../coin.jsx'

describe('With Snapshot Testing', () => {
  it('should create snapshot of coin', () => {
    const component = renderer.create(<Coin />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
