import { ITask } from './model'
import Tasks from './model'

function createTask(task: ITask) {
  return Tasks.create(task)
}

function getAllTasks(task: ITask) {
  return Tasks.find()
}

function deleteTask(id: string) {
  return Tasks.findByIdAndDelete(id)
}

export { createTask, getAllTasks, deleteTask }
