import {
  TTasksActionTypes,
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_REQUEST,
} from './types'
import { initialState } from './index'

const tasksReducer = (state = initialState, action: TTasksActionTypes) => {
  switch (action.type) {
    case LOAD_TASKS_REQUEST:
      return {
        ...state,
        gettingTasks: true,
      }
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        gettingTasks: false,
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case DELETE_TASK:
      console.log({
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      })
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      }
    default:
      return state
  }
}

export default tasksReducer
