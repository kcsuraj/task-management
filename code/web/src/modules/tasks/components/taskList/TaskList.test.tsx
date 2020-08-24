import React from 'react'
import { render, cleanup } from 'testUtils'
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
  const { getByText } = render(<TaskList tasks={[]} />)
  expect(getByText(/no tasks/i))
})

test('renders contacts', () => {
  const { getAllByTestId } = render(<TaskList tasks={tasks} />)

  const taskNames = getAllByTestId('task-name').map((li) => li.textContent)

  const fakeTaskNames = tasks.map((value) => value.task)

  expect(taskNames).toEqual(fakeTaskNames)
})
