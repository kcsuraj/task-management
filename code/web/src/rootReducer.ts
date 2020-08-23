import { chatReducer } from 'modules/todo/store/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  chat: chatReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
