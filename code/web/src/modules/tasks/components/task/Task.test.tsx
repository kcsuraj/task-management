import React from 'react'
import { render, fireEvent } from 'testUtils'
import Task from './Task'

const task = {
  _id: 'task-1',
  title: 'Learning react testing library',
  completed: false,
  createdAt: new Date(),
}

describe('Task', () => {
  const removeTask = jest.fn()
  it('render task correctly', async () => {
    const { getByTestId } = render(<Task task={task} removeTask={removeTask} />)
    expect(getByTestId('task-name').textContent).toBe(
      'Learning react testing library'
    )
  })

  it('delete a task', async () => {
    const removeTask = jest.fn()

    const { getByText } = render(<Task task={task} removeTask={removeTask} />)
    fireEvent.click(getByText(/delete/i))

    expect(removeTask).toHaveBeenCalledTimes(1)
    expect(removeTask).toHaveBeenCalledWith('task-1')
  })
})
