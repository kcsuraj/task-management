import React from 'react'
import { render, waitForElementToBeRemoved } from 'testUtils'
import Tasks from './Tasks'
import axiosMock from 'axios'

describe('Tasks', () => {
  it('render tasks correctly', async () => {
    ;(axiosMock.get as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          id: 'task-2',
          task: 'Learning mocha and chai',
          completed: false,
        },
      ],
    })

    const { getByText } = render(<Tasks />)

    await waitForElementToBeRemoved(() => getByText(/loading tasks/i))

    expect(axiosMock.get).toHaveBeenCalled()

    expect(getByText(/Learning mocha and chai/i)).toBeInTheDocument()
  })
})
