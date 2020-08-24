import { ITask } from './initialState'

export const LOAD_TASKS_REQUEST = 'LOAD_TASKS_REQUEST'
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS'

export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TASK = 'DELETE_TASK'

interface ILoadTasksRequestAction {
  type: typeof LOAD_TASKS_REQUEST
}

interface ILoadTasksSuccessAction {
  type: typeof LOAD_TASKS_SUCCESS
  payload: ITask[]
}

interface IAddTaskAction {
  type: typeof ADD_TASK
  payload: ITask
}

interface IToggleCompletedAction {
  type: typeof TOGGLE_COMPLETED
  payload: string
}

interface IDeleteTaskAction {
  type: typeof DELETE_TASK
  payload: string
}

export type TTasksActionTypes =
  | ILoadTasksRequestAction
  | ILoadTasksSuccessAction
  | IAddTaskAction
  | IToggleCompletedAction
  | IDeleteTaskAction
