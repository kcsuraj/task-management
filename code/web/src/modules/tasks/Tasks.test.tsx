import React from 'react'
import { render, waitForElementToBeRemoved } from 'testUtils'
import Tasks from './Tasks'
import axiosMock from 'axios'

describe('Tasks', () => {
  it('render tasks correctly', async () => {
    ;(axiosMock.get as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          _id: 'task-1',
          title: 'Learning mocha and chai',
          completed: false,
          createdAt: new Date(),
        },
      ],
    })

    const { getByText } = render(<Tasks />)

    await waitForElementToBeRemoved(() => getByText(/loading tasks/i))

    expect(axiosMock.get).toHaveBeenCalled()

    expect(getByText(/Learning mocha and chai/i)).toBeInTheDocument()
  })
})
