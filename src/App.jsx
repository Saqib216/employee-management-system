import React, { useContext, useEffect, useState } from 'react'
import SignIn from './components/Auth/SignIn'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null); // can also write '' in place of null

  const authData = useContext(AuthContext);
  // console.log(authData);


  const handleLogin = (email, password) => {
    // Employee Checking and Finding
    const employee = authData?.employees.find(e => e.email === email && e.password === password);

    // Admin Checking and Finding
    const admin = (authData?.admin.email === email && authData?.admin.password === password) ? authData.admin : null;

    // Logged In user
    const loggedInUser = employee || admin; // whoever matched

    if (loggedInUser) {
      setUser(loggedInUser);  // User will store full 'object' (for either employee or admin)
    } else {
      alert('Invalid Credentials');
    }

  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <>
      {!user ? <SignIn handleLogin={handleLogin} /> : ''}
      {user?.role === 'employee' && <EmployeeDashboard handleLogout={handleLogout} employeeData={user}/>}
      {user?.role === 'admin' && <AdminDashboard handleLogout={handleLogout} adminData={user}/>}
    </>
  )
}

export default App