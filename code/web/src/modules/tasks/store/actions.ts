import {
  ADD_TASK,
  TTasksActionTypes,
  DELETE_TASK,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_REQUEST,
  TOGGLE_COMPLETED,
} from './types'
import uniqueId from 'utils/uniqueid'
import { ITask } from './initialState'

export const loadTasksRequestAction = (): TTasksActionTypes => ({
  type: LOAD_TASKS_REQUEST,
})

export const loadTasksSuccessAction = (tasks: ITask[]): TTasksActionTypes => ({
  type: LOAD_TASKS_SUCCESS,
  payload: tasks,
})

export const addTaskAction = (task: string): TTasksActionTypes => ({
  type: ADD_TASK,
  payload: {
    id: uniqueId('task-'),
    task,
    completed: false,
  },
})

export const toggleCompletedAction = (taskId: string): TTasksActionTypes => ({
  type: TOGGLE_COMPLETED,
  payload: taskId,
})

export const removeTaskAction = (taskId: string): TTasksActionTypes => ({
  type: DELETE_TASK,
  payload: taskId,
})
