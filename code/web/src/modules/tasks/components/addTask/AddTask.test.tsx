import React from 'react'
import { cleanup, render, fireEvent } from 'testUtils'
import AddTask from './AddTask'

afterEach(cleanup)

test('calls submit with task text', async () => {
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
  expect(handleSubmit).toBeCalledWith('Learn react testing library')
})
