import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = ({ handleLogout, adminData }) => {
  if (!adminData) return null;

  return (
    <div>
      <Header handleLogout={handleLogout} adminData={adminData} />
      <AllTasks />
      <CreateTask />
    </div>
  )
}

export default AdminDashboard