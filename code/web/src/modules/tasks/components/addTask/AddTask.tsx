import React, { FC, FormEvent, useState, ChangeEvent } from 'react'
import { ITask } from 'modules/tasks/store'

interface IProps {
  handleSubmit: (task: string) => void
}

const AddTask: FC<IProps> = ({ handleSubmit }) => {
  const [query, setQuery] = useState<string>('')

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query) {
      setQuery('')
      handleSubmit(query)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        onChange={handleTaskChange}
        value={query}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTask
