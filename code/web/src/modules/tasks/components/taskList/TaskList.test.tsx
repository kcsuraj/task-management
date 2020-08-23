import React from 'react'
import { render, cleanup } from '@testing-library/react'
import TaskList from './TaskList'

const tasks = ['Learning react testing library', 'Learning mocha and chai']

test('renders no tasks when task is not added', () => {
  const { getByText } = render(<TaskList tasks={[]} />)
  expect(getByText(/no tasks/i))
})

test('renders contacts', () => {
  const { getAllByTestId } = render(<TaskList tasks={tasks} />)

  const taskNames = getAllByTestId('task-name').map((li) => li.textContent)

  expect(taskNames).toEqual(tasks)
})
