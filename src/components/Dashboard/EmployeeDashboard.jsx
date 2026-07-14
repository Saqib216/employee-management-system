import React from 'react'
import Header from '../other/Header'
import TaskListOverview from '../other/TaskListOverview'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, employeeData }) => {
  return (
    <div className='m-5'>
        <Header handleLogout={handleLogout} employeeData={employeeData} />
        <TaskListOverview employeeData={employeeData}/>
        <TaskList employeeData={employeeData}/>
    </div>
  )
}

export default EmployeeDashboard