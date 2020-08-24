import { Document, Schema, model } from 'mongoose'

export interface ITask extends Document {
  completed: Date
  createdAt?: string
  id: string
  task: string
}

const TasksSchema: Schema = new Schema({
  completed: {
    required: true,
    type: Boolean,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
  id: {
    required: true,
    type: String,
    unique: true,
  },
  task: {
    required: true,
    type: String,
  },
})

const Tasks = model<ITask>('tasks', TasksSchema)

export default Tasks
