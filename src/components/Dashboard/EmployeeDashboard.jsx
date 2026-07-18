import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListOverview from '../other/TaskListOverview'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ handleLogout, employeeData }) => {
  const [userData] = useContext(AuthContext);
  const freshEmployee = userData?.employees.find(e => e.email === employeeData.email) || employeeData;

  return (
    <div className='m-5'>
        <Header handleLogout={handleLogout} employeeData={freshEmployee} />
        <TaskListOverview employeeData={freshEmployee}/>
        <TaskList employeeData={freshEmployee}/>
    </div>
  )
}

export default EmployeeDashboard
