import { Document, Schema, model } from 'mongoose'

export interface ITask extends Document {
  completed?: boolean
  createdAt?: Date
  title: string
}

const TasksSchema: Schema = new Schema(
  {
    completed: {
      default: false,
      type: Boolean,
    },
    createdAt: {
      default: Date.now(),
      type: Date,
    },

    title: {
      required: true,
      type: String,
    },
  },
  { versionKey: false }
)

const Tasks = model<ITask>('tasks', TasksSchema)

export default Tasks
