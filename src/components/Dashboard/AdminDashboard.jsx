import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = ({handleLogout, adminData}) => {
  console.log(adminData);
  return (
    <div className='m-5'>
      <Header handleLogout={handleLogout}/>
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard