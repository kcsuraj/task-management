import React, { FC } from 'react'
import { ITask } from 'modules/tasks/store'
import { Task } from 'modules/tasks/components'

interface IProps {
  tasks: ITask[]
  removeTask: (taskId: string) => void
}

const TaskList: FC<IProps> = ({ tasks, removeTask }) => {
  if (!tasks.length) {
    return <div>No tasks</div>
  }

  return (
    <ul aria-label="tasks-list">
      {tasks.map((task) => (
        <Task task={task} key={task._id} removeTask={removeTask} />
      ))}
    </ul>
  )
}

export default TaskList
