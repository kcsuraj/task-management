import React, { FC, FormEvent, useState, ChangeEvent } from 'react'

interface IProps {
  handleSubmit: (value: string) => void
}

const AddTask: FC<IProps> = ({ handleSubmit }) => {
  const [task, setTask] = useState<string>('')

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (task) {
      handleSubmit(task)
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
