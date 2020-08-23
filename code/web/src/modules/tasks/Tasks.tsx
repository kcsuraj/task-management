import React, { FC } from 'react'
import { AddTask, TaskList } from 'modules/tasks/components'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from 'store'
import { addTaskAction, ITask } from 'modules/tasks/store'

const Tasks: FC = () => {
  const { taskStore } = useSelector((state: TRootState) => state)
  const dispatch = useDispatch()

  const addTask = (task: ITask) => {
    dispatch(addTaskAction(task))
  }

  return (
    <div>
      In task list
      <AddTask handleSubmit={addTask} />
      <TaskList tasks={taskStore.tasks} />
    </div>
  )
}

export default Tasks
