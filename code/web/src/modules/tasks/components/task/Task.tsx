import React, { FC } from 'react'
import { ITask } from 'modules/tasks/store'

interface IProps {
  task: ITask
  removeTask: (taskId: string) => void
}

const Task: FC<IProps> = ({ task, removeTask }) => {
  return (
    <li>
      <p data-testid="task-name">{task.title}</p>

      <span onClick={() => removeTask(task._id)}>Delete</span>
    </li>
  )
}

export default Task
