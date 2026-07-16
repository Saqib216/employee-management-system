import React from 'react'
import Header from '../other/Header'
import TaskListOverview from '../other/TaskListOverview'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, employeeData }) => {
  // Read fresh data from localStorage so newly assigned tasks appear immediately
  const employees = JSON.parse(localStorage.getItem('employees'));
  const freshEmployeeData = employees.find(e => e.email === employeeData.email);

  return (
    <div className='m-5'>
      <Header handleLogout={handleLogout} employeeData={freshEmployeeData} />
      <TaskListOverview employeeData={freshEmployeeData} />
      <TaskList employeeData={freshEmployeeData} />
    </div>
  )
}

export default EmployeeDashboard