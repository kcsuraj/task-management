import {
  TTasksActionTypes,
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_REQUEST,
  TOGGLE_COMPLETED,
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
    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    default:
      return state
  }
}

export default tasksReducer
