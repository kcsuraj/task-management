import { ITask } from './initialState'
import { ADD_TASK, TTasksActionTypes } from './types'
import uniqueId from 'utils/uniqueid'

export function addTaskAction(task: string): TTasksActionTypes {
  return {
    type: ADD_TASK,
    payload: {
      id: uniqueId('task-'),
      task,
      completed: false,
    },
  }
}
