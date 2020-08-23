import React, { FC } from 'react'
import { AddTask } from 'modules/tasks/components'

const Tasks: FC = () => {
  return (
    <div>
      In task list
      <AddTask
        handleSubmit={(data: any) => {
          console.log(data)
        }}
      />
    </div>
  )
}

export default Tasks
