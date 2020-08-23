import React, { FC, FormEvent, useState, ChangeEvent } from 'react'
import { ITask } from 'modules/tasks/store'
import uniqueId from 'utils/uniqueid'

interface IProps {
  handleSubmit: (task: ITask) => void
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
      handleSubmit({ id: uniqueId('task-'), task: query })
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
