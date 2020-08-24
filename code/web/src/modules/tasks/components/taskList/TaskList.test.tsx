import React from 'react'
import { render } from 'testUtils'
import TaskList from './TaskList'

const tasks = [
  {
    id: 'task-1',
    task: 'Learning react testing library',
    completed: false,
  },
  {
    id: 'task-2',
    task: 'Learning mocha and chai',
    completed: false,
  },
]

test('renders no tasks when task is not added', () => {
  const removeTask = jest.fn()

  const { getByText } = render(<TaskList tasks={[]} removeTask={removeTask} />)
  expect(getByText(/no tasks/i))
})

test('renders contacts', () => {
  const removeTask = jest.fn()

  const { getAllByTestId } = render(
    <TaskList tasks={tasks} removeTask={removeTask} />
  )

  const taskNames = getAllByTestId('task-name').map((li) => li.textContent)

  const fakeTaskNames = tasks.map((value) => value.task)

  expect(taskNames).toEqual(fakeTaskNames)
})
