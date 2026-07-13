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
    if (authData && authData.employees.find((e) => e.email === email && e.password === password)) {
      setUser('employee');
    }
    else if (authData && authData.admin.email === email) {
      setUser('admin');
    }
    else {
      alert('invalid credentials');
    }
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <>
      {!user ? <SignIn handleLogin={handleLogin} /> : ''}
      {user === 'employee' && <EmployeeDashboard handleLogout={handleLogout} />}
      {user === 'admin' && <AdminDashboard handleLogout={handleLogout} />}
    </>
  )
}

export default App