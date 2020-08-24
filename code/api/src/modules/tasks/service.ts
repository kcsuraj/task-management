import userModel, { ITask } from './model'
import Tasks from './model'

function createTask(task: ITask) {
  return Tasks.create(task)
}

export { createTask }
