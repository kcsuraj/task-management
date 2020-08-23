import React from 'react'
import { render, fireEvent } from 'testUtils'
import App from './App'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  it('render app correctly', () => {
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch('In task list')

    fireEvent.click(getByText(/my day/i))

    // check that the content changed to the new page
    expect(container.innerHTML).toMatch('my day')
  })
})
