import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Sidebar: FC = () => {
  return (
    <nav>
      <Link to="/">Tasks</Link>
      <Link to="/myday">My Day</Link>
    </nav>
  )
}

export default Sidebar
