import React, { FC, useEffect, useCallback, Fragment } from 'react'
import { AddTask, TaskList } from 'modules/tasks/components'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from 'store'
import {
  loadTasksRequestAction,
  loadTasksSuccessAction,
  addTaskAction,
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
      const response = await axios.get('/tasks')
      dispatch(loadTasksSuccessAction(response.data))
    } catch (error) {}
  }, [dispatch])

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  const addTask = async (task: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', {
        title: task,
      })
      dispatch(addTaskAction(response.data))
    } catch (error) {}
  }

  const removeTask = async (taskId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/tasks/${taskId}`
      )

      dispatch(removeTaskAction(response.data._id))
    } catch (error) {}
  }

  return (
    <div>
      In task list
      <AddTask handleSubmit={addTask} />
      {taskStore.gettingTasks ? (
        <div>Loading tasks </div>
      ) : (
        <Fragment>
          <TaskList tasks={taskStore.tasks} removeTask={removeTask} />
        </Fragment>
      )}
    </div>
  )
}

export default Tasks
