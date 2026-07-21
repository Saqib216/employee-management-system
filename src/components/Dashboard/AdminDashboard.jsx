import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = ({ handleLogout, adminData }) => {
  if (!adminData) return null;

  return (
    <div className='m-5'>
      <Header handleLogout={handleLogout} adminData={adminData} />
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard