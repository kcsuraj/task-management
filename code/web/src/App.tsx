import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Tasks, MyDay } from 'modules/tasks'
import { Sidebar } from 'components'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Tasks} />
        <Route exact path="/myday" component={MyDay} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
