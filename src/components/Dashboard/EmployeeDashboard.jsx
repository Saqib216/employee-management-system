import React from 'react'
import Header from '../other/Header'
import TaskListOverview from '../other/TaskListOverview'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout }) => {
  return (
    <div className='m-5'>
        <Header handleLogout={handleLogout} />
        <TaskListOverview />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard