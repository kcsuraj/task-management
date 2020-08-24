import React, { FC } from 'react'
import { AddTask, TaskList } from 'modules/tasks/components'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from 'store'
import { addTaskAction, removeTaskAction } from 'modules/tasks/store'

const Tasks: FC = () => {
  const { taskStore } = useSelector((state: TRootState) => state)
  const dispatch = useDispatch()

  const addTask = (task: string) => {
    dispatch(addTaskAction(task))
  }

  const removeTask = (taskId: string) => {
    dispatch(removeTaskAction(taskId))
  }

  return (
    <div>
      In task list
      <AddTask handleSubmit={addTask} />
      <TaskList tasks={taskStore.tasks} removeTask={removeTask} />
    </div>
  )
}

export default Tasks
