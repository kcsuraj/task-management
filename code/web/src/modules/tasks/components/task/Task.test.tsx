import React from 'react'
import { render, fireEvent, wait, waitForElementToBeRemoved } from 'testUtils'
import Task from './Task'

const task = {
  id: 'task-1',
  task: 'Learning react testing library',
  completed: false,
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
