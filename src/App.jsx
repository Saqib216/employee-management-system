import React, { useContext, useEffect, useState } from 'react'
import SignIn from './components/Auth/SignIn'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null); // can also write '' in place of null

  const handleLogin = (email, password) => {
    if (email == 'employee@123.com' && password == '123') {
      setUser('employee');
    }
    else if (email == 'admin@123.com' && password == '123') {
      setUser('admin');
    }
    else {
      console.log('invalid credentials');
    }
  }

  const data = useContext(AuthContext);
  

  return (
    <>
      {!user ? <SignIn handleLogin={handleLogin} /> : ''}
      {user === 'employee' && <EmployeeDashboard />}
      {user === 'admin' && <AdminDashboard />}
    </>
  )
}

export default App