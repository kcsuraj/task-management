import React from 'react'
import { render } from 'testUtils'
import TaskList from './TaskList'

const tasks = [
  {
    _id: 'task-1',
    title: 'Learning react testing library',
    completed: false,
    createdAt: new Date(),
  },
  {
    _id: 'task-2',
    title: 'Learning mocha and chai',
    completed: false,
    createdAt: new Date(),
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

  const fakeTaskNames = tasks.map((value) => value.title)

  expect(taskNames).toEqual(fakeTaskNames)
})
