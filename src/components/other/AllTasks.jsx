import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className='bg-card p-4 m-10 rounded-xl flex flex-col gap-3'>
      <div className='flex justify-between bg-[#fe4d4d] p-3 rounded-xl text-center font-semibold'>
        <h3 className='w-1/5 '>EmployeeName</h3>
        <p className='w-1/5 '>New Task</p>
        <p className='w-1/5 '>Active</p>
        <p className='w-1/5 '>Completed</p>
        <p className='w-1/5 '>Failed</p>
      </div>

      {authData.employees.map((employee, idx) => {
        return <div key={idx} className='flex justify-between border border-accent p-3 rounded-xl text-center'>
          <h3 className='w-1/5 text-amber-500'>{employee.name}</h3>
          <p className='w-1/5 text-emerald-700'>{employee.tasksCount.newTask}</p>
          <p className='w-1/5 text-pink-500'>{employee.tasksCount.active}</p>
          <p className='w-1/5 text-rose-500'>{employee.tasksCount.completed}</p>
          <p className='w-1/5 text-green-500'>{employee.tasksCount.failed}</p>
        </div>
      })}
    </div>
  )
}

export default AllTasks