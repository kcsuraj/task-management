import { createStore } from 'redux'
import { chatReducer } from 'modules/todo/store/reducer'
import { combineReducers } from 'redux'
import { initialState as todoInitialState } from 'modules/todo/store'

export const rootReducer = combineReducers({
  chat: chatReducer,
})

export type TRootState = ReturnType<typeof rootReducer>

export const rootState = {
  chat: todoInitialState,
}

const store = createStore(rootReducer)

export default store
