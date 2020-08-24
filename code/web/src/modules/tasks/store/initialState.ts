export interface ITask {
  id: string
  task: string
  completed: boolean
}

export interface IState {
  gettingTasks: boolean
  tasks: ITask[]
}

export const initialState: IState = {
  gettingTasks: true,
  tasks: [],
}
