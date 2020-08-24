import { ITask } from './initialState'

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

interface IAddTaskAction {
  type: typeof ADD_TASK
  payload: ITask
}

interface IDeleteTaskAction {
  type: typeof DELETE_TASK
  payload: string
}

export type TTasksActionTypes = IAddTaskAction | IDeleteTaskAction
