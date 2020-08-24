import { TTasksActionTypes, ADD_TASK, DELETE_TASK } from './types'
import { initialState } from './index'

const tasksReducer = (state = initialState, action: TTasksActionTypes) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      }
    case DELETE_TASK:
      console.log(state)
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    default:
      return state
  }
}

export default tasksReducer
