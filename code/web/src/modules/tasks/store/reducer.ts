import { TTasksActionTypes, ADD_TASK } from './types'
import { initialState } from './index'

const tasksReducer = (state = initialState, action: TTasksActionTypes) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      }
    default:
      return state
  }
}

export default tasksReducer
