import React, { FC, useEffect, useCallback, Fragment } from 'react'
import { AddTask, TaskList } from 'modules/tasks/components'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from 'store'
import {
  loadTasksRequestAction,
  loadTasksSuccessAction,
  addTaskAction,
  toggleCompletedAction,
  removeTaskAction,
  completedTasks,
  incompleteTasks,
} from 'modules/tasks/store'
import axios from 'services/api'

const Tasks: FC = () => {
  const { taskStore } = useSelector((state: TRootState) => {
    return state
  })
  const dispatch = useDispatch()

  const loadTasks = useCallback(async () => {
    try {
      dispatch(loadTasksRequestAction())
      const { data } = await axios.get('/tasks')
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
        <Fragment>
          <TaskList
            toggleCompleted={toggleCompleted}
            tasks={incompleteTasks(taskStore)}
            removeTask={removeTask}
          />

          <TaskList
            toggleCompleted={toggleCompleted}
            tasks={completedTasks(taskStore)}
            removeTask={removeTask}
          />
        </Fragment>
      )}
    </div>
  )
}

export default Tasks
