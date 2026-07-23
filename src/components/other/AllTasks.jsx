import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [selectedEmployee, setSelectedEmployee] = useState(userData.employees[0]);

  const deleteTask = (taskId) => { }

  return (
    <div className='m-10 min-h-screen'>
      <h2 className='font-bold text-3xl text-center my-6'>Employee Tasks</h2>

      <div className='flex gap-4 justify-center mb-4'>
        {
          userData.employees.map(employee => (
            <button
              key={employee.id}
              onClick={() => { setSelectedEmployee(employee); }}
              className={selectedEmployee.email === employee.email ? 'bg-accent text-primary py-1 px-5 font-medium rounded-2xl cursor-pointer' : 'bg-card text-secondary py-1 px-5 font-medium rounded-2xl cursor-pointer transition-all duration-300 ease-in-out'
              }
            >
              {employee.name.split(' ')[0]}
            </button>
          ))
        }
      </div>

      <div className='flex gap-4 mb-4'>
        <span>📋 New: {selectedEmployee.tasksCount.newTask}</span>
        <span>⚡ Active: {selectedEmployee.tasksCount.active}</span>
        <span>✅ Done: {selectedEmployee.tasksCount.completed}</span>
        <span>❌ Failed: {selectedEmployee.tasksCount.failed}</span>
      </div>

      <div>
        {selectedEmployee.tasks.map(task => (
          <div key={task.id}>
            <span>{task.taskTitle}</span>
            <button onClick={() => deleteTask(task.id)}>🗑</button>
          </div>
        ))}
      </div>


    </div>
    // <div className='bg-card p-4 m-10 rounded-xl flex flex-col gap-3'>
    //   <div className='flex justify-between bg-[#fe4d4d] p-3 rounded-xl text-center font-semibold'>
    //     <h3 className='w-1/5 '>EmployeeName</h3>
    //     <p className='w-1/5 '>New Task</p>
    //     <p className='w-1/5 '>Active</p>
    //     <p className='w-1/5 '>Completed</p>
    //     <p className='w-1/5 '>Failed</p>
    //   </div>

    //   {userData.employees.map((employee, idx) => {
    //     return <div key={idx} className='flex justify-between border border-accent p-3 rounded-xl text-center'>
    //       <h3 className='w-1/5 text-amber-500'>{employee.name}</h3>
    //       <p className='w-1/5 text-emerald-700'>{employee.tasksCount.newTask}</p>
    //       <p className='w-1/5 text-pink-500'>{employee.tasksCount.active}</p>
    //       <p className='w-1/5 text-rose-500'>{employee.tasksCount.completed}</p>
    //       <p className='w-1/5 text-green-500'>{employee.tasksCount.failed}</p>
    //     </div>
    //   })}
    // </div>
  )
}

export default AllTasks