import React from 'react'
import { render, fireEvent } from 'testUtils'
import Tasks from './Tasks'

describe('Tasks', () => {
  it('render tasks correctly', () => {
    render(<Tasks />)
  })
})
