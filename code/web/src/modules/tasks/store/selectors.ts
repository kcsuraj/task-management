import { IState } from './initialState'

export const incompleteTasks = (tasksStore: IState) =>
  tasksStore.tasks.filter((task) => !task.completed)

export const completedTasks = (tasksStore: IState) =>
  tasksStore.tasks.filter((task) => task.completed)
