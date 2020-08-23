import { ITask } from './initialState'

export const ADD_TASK = 'ADD_TASK'

interface IAddTaskAction {
  type: typeof ADD_TASK
  payload: ITask
}

export type TTasksActionTypes = IAddTaskAction
