export interface ITask {
  _id: string
  title: string
  completed: boolean
  createdAt: Date
}

export interface IState {
  gettingTasks: boolean
  tasks: ITask[]
}

export const initialState: IState = {
  gettingTasks: true,
  tasks: [],
}
