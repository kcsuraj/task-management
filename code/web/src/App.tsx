import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessageAction } from 'modules/todo/store'
import { TRootState } from 'store'

const App: FC = () => {
  const messages = useSelector((state: TRootState) => state.chat.messages)
  const dispatch = useDispatch()

  console.log(messages)

  const addMessage = () => {
    dispatch(sendMessageAction({ message: 'react redux is awesome' }))
  }

  return (
    <div>
      {messages.length}
      <p>Add message</p>
      <button onClick={addMessage}>Add new message</button>
    </div>
  )
}

export default App
