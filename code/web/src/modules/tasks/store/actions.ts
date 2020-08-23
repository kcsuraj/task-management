import { IMessage } from './initialState'
import { SEND_MESSAGE, TChatActionTypes } from './types'

export function sendMessageAction(newMessage: IMessage): TChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  }
}
