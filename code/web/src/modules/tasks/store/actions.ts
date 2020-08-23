import { ITask } from './initialState'
import { ADD_TASK, TTasksActionTypes } from './types'

export function addTaskAction(newTask: ITask): TTasksActionTypes {
  return {
    type: ADD_TASK,
    payload: newTask,
  }
}
