import React, { FC } from 'react'
import { ITask } from 'modules/tasks/store'

interface IProps {
  tasks: ITask[]
}

const TaskList: FC<IProps> = ({ tasks }) => {
  if (!tasks.length) {
    return <div>No tasks</div>
  }

  return (
    <ul>
      {tasks.map((value) => (
        <li data-testid="task-name" key={value.id}>
          {value.task}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
