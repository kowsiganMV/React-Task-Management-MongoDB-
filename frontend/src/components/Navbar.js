import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

  const {tasksList}=useSelector((sate)=>sate.tasks)

  return (
    <nav>
      <h1>Project Management</h1>
      <p>{`Currently ${tasksList.length} task(s) pending`}</p>
    </nav>
  )
}

export default Navbar