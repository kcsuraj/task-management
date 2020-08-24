import React, { FC, useEffect, useCallback } from 'react'
import { AddTask, TaskList } from 'modules/tasks/components'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from 'store'
import {
  loadTasksRequestAction,
  loadTasksSuccessAction,
  addTaskAction,
  toggleCompletedAction,
  removeTaskAction,
} from 'modules/tasks/store'
import axios from 'axios'

const Tasks: FC = () => {
  const { taskStore } = useSelector((state: TRootState) => {
    return state
  })
  const dispatch = useDispatch()

  const loadTasks = useCallback(async () => {
    try {
      dispatch(loadTasksRequestAction())
      const { data } = await axios.get('http://localhost:5000/tasks')
      dispatch(loadTasksSuccessAction(data))
    } catch (error) {}
  }, [dispatch])

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  const addTask = (task: string) => {
    dispatch(addTaskAction(task))
  }

  const removeTask = (taskId: string) => {
    dispatch(removeTaskAction(taskId))
  }

  const toggleCompleted = (taskId: string) => {
    dispatch(toggleCompletedAction(taskId))
  }

  return (
    <div>
      In task list
      <AddTask handleSubmit={addTask} />
      {taskStore.gettingTasks ? (
        <div>Loading tasks </div>
      ) : (
        <TaskList
          toggleCompleted={toggleCompleted}
          tasks={taskStore.tasks}
          removeTask={removeTask}
        />
      )}
    </div>
  )
}

export default Tasks
