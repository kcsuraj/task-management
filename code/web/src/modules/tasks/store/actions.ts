import { ADD_TASK, TTasksActionTypes, DELETE_TASK } from './types'
import uniqueId from 'utils/uniqueid'

export const addTaskAction = (task: string): TTasksActionTypes => ({
  type: ADD_TASK,
  payload: {
    id: uniqueId('task-'),
    task,
    completed: false,
  },
})

export const removeTaskAction = (taskId: string): TTasksActionTypes => ({
  type: DELETE_TASK,
  payload: taskId,
})
