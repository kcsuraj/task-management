import React, { FC, FormEvent, useState, ChangeEvent } from 'react'
import { ITask } from 'modules/tasks/store'
import uniqueId from 'utils/uniqueid'

interface IProps {
  handleSubmit: (task: ITask) => void
}

const AddTask: FC<IProps> = ({ handleSubmit }) => {
  const [task, setTask] = useState<string>('')

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (task) {
      handleSubmit({ id: uniqueId('task-'), task })
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Add a task" onChange={handleTaskChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTask
