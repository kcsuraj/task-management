import { createStore } from 'redux'
import { combineReducers } from 'redux'
import {
  initialState as todoInitialState,
  tasksReducer,
} from 'modules/tasks/store'

export const rootReducer = combineReducers({
  taskStore: tasksReducer,
})

export type TRootState = ReturnType<typeof rootReducer>

export const rootState = {
  taskStore: todoInitialState,
}

const store = createStore(rootReducer)

export default store
