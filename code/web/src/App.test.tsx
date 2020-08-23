import React from 'react'
import { render } from 'testUtils'
import App from './App'
import { debug } from 'console'

describe('App', () => {
  it('render app correctly', () => {
    render(<App />)
  })
})
