export interface ITask {
  id: string
  task: string
}

export interface IState {
  tasks: ITask[]
}

export const initialState: IState = {
  tasks: [],
}
