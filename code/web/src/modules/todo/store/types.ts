import { IMessage } from './initialState'

export const SEND_MESSAGE = 'SEND_MESSAGE'

interface ISendMessageAction {
  type: typeof SEND_MESSAGE
  payload: IMessage
}

export type TChatActionTypes = ISendMessageAction
