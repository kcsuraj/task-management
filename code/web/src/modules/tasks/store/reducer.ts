import { TChatActionTypes, SEND_MESSAGE } from './types'
import { initialState, IState } from './index'

export function chatReducer(
  state = initialState,
  action: TChatActionTypes
): IState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}
