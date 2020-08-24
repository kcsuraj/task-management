import {
  ADD_TASK,
  TTasksActionTypes,
  DELETE_TASK,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_REQUEST,
} from './types'
import { ITask } from './initialState'

export const loadTasksRequestAction = (): TTasksActionTypes => ({
  type: LOAD_TASKS_REQUEST,
})

export const loadTasksSuccessAction = (tasks: ITask[]): TTasksActionTypes => ({
  type: LOAD_TASKS_SUCCESS,
  payload: tasks,
})

export const addTaskAction = (task: ITask): TTasksActionTypes => ({
  type: ADD_TASK,
  payload: task,
})

export const removeTaskAction = (taskId: string): TTasksActionTypes => ({
  type: DELETE_TASK,
  payload: taskId,
})
