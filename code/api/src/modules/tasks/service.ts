import { ITask } from './model'
import Tasks from './model'

function createTask(task: ITask) {
  return Tasks.create(task)
}

function getAllTasks(task: ITask) {
  return Tasks.find()
}

function updateTask(id: string, updatedTask: ITask) {
  return Tasks.findOneAndUpdate({ id }, updatedTask)
}

function deleteTask(id: string) {
  return Tasks.deleteOne({ id })
}

export { createTask, getAllTasks, updateTask, deleteTask }
