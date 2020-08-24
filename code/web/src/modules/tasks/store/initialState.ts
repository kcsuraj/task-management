export interface ITask {
  id: string
  task: string
  completed: boolean
}

export interface IState {
  tasks: ITask[]
}

export const initialState: IState = {
  tasks: [],
}
