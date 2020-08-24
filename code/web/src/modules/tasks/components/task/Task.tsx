import React, { FC } from 'react'
import { ITask } from 'modules/tasks/store'

interface IProps {
  task: ITask
  removeTask: (taskId: string) => void
  toggleCompleted: (taskId: string) => void
}

const Task: FC<IProps> = ({ task, removeTask, toggleCompleted }) => {
  console.log(task.completed)
  return (
    <li style={task.completed ? { textDecoration: 'line-through' } : {}}>
      <p data-testid="task-name">{task.task}</p>
      <input
        name="completed-status"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <span onClick={() => removeTask(task.id)}>Delete</span>
    </li>
  )
}

export default Task
