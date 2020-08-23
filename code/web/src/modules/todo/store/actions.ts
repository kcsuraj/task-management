// src/store/chat/actions.ts

import {
  IMessage,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  TChatActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: IMessage): TChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): TChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  }
}
