export interface IMessage {
  message: string
}

export interface IState {
  messages: IMessage[]
}

export const initialState: IState = {
  messages: [{ message: 'hello' }],
}
