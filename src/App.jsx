import React, { useContext, useEffect, useState } from 'react'
import SignIn from './components/Auth/SignIn'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import {Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null); // can also write '' in place of null

  const [userData, setUserData] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (savedUser) {
      setUser(savedUser); // restore loggedInUser from local Storage
    }
  }, []);

  const handleLogin = (email, password) => {
    // Employee Checking and Finding
    const employee = userData?.employees.find(e => e.email === email && e.password === password);

    // Admin Checking and Finding
    const admin = (userData?.admin.email === email && userData?.admin.password === password) ? userData.admin : null;

    // Logged In user
    const loggedInUser = employee || admin; // whoever matched

    if (loggedInUser) {
      setUser(loggedInUser);  // User will store full 'object' (for either employee or admin)
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); // save the loggedInUser to local storage

      // Navigation:
      if(loggedInUser.role === 'admin'){
        navigate('/dashboard/admin')
      } else {
        navigate('/dashboard/employee')
      }

    } else {
      alert('Invalid Credentials');
    }
  }

  const handleLogout = () => {
    if (confirm(
      (user?.role === 'admin') ? `${user?.name.split(' ')[1]}, are you sure you want to log out?` : `${user?.name.split(' ')[0]}, are you sure you want to log out?`
    )) {
      setUser(null);
      localStorage.removeItem('loggedInUser');  // remove the loggedInUser from localStorage upon logout.
      navigate('/');
    }
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn handleLogin={handleLogin}/>} />

        <Route path='/dashboard/admin' element={<AdminDashboard handleLogout={handleLogout} adminData={user}/>}/>

        <Route path='/dashboard/employee' element={<EmployeeDashboard handleLogout={handleLogout} employeeData={user}/>}/>

      </Routes>

      {/* {!user ? <SignIn handleLogin={handleLogin} /> : ''}
      {user?.role === 'employee' && <EmployeeDashboard handleLogout={handleLogout} employeeData={user} />}
      {user?.role === 'admin' && <AdminDashboard handleLogout={handleLogout} adminData={user} />} */}
    </>
  )
}

export default App