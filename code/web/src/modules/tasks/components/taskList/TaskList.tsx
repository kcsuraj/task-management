import React, { FC } from 'react'

interface IProps {
  tasks: string[]
}

const TaskList: FC<IProps> = ({ tasks }) => {
  if (!tasks.length) {
    return <div>No tasks</div>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li data-testid="task-name" key={task}>
          {task}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
