import React from 'react'
import { cleanup, render, fireEvent } from 'testUtils'
import AddTask from './AddTask'

afterEach(cleanup)

describe('Add task', () => {
  it('should not submit if task is not added', () => {
    const handleSubmit = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <AddTask handleSubmit={handleSubmit} />
    )

    const inputElement = getByPlaceholderText(/add a task/i)
    const submitButton = getByText(/submit/i)

    fireEvent.change(inputElement, {
      target: { value: '' },
    })

    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })

  it('calls submit with task text if task is added', async () => {
    const handleSubmit = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <AddTask handleSubmit={handleSubmit} />
    )

    const inputElement = getByPlaceholderText(/add a task/i)
    const submitButton = getByText(/submit/i)

    fireEvent.change(inputElement, {
      target: { value: 'Learn react testing library' },
    })

    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toBeCalledWith({
      id: 'task-1',
      task: 'Learn react testing library',
    })
  })
})
