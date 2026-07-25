import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Button from './Button'

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [selectedEmployee, setSelectedEmployee] = useState(userData.employees[0]);

  const deleteTask = (taskId) => {
    const updatedEmployees = userData.employees.map(employee => {
      if (employee.email === selectedEmployee.email) {
        const updatedTasks = employee.tasks.filter(t => t.id !== taskId);
        const newCount = {
          newTask: updatedTasks.filter(t => t.newTask).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length,
        };

        const updatedEmp = { ...employee, tasks: updatedTasks, tasksCount: newCount };

        setSelectedEmployee(updatedEmp);
        return updatedEmp;
      }
      return employee;
    });
    setUserData({ ...userData, employees: updatedEmployees });
  }

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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
        {(selectedEmployee.tasks.length !== 0) && (
          <>
            <div className='flex flex-col justify-between items-center bg-surface border border-blue-500 rounded-lg p-3'>
              <span className='text-4xl font-bold text-blue-400'>{selectedEmployee.tasksCount.newTask}</span>
              <span>📋 NEW</span>
            </div>
            <div className='flex flex-col justify-between items-center bg-surface border border-yellow-500 rounded-lg p-3'>
              <span className='text-4xl font-bold text-yellow-400'>{selectedEmployee.tasksCount.active}</span>
              <span>⚡ ACTIVE</span>
            </div>
            <div className='flex flex-col justify-between items-center bg-surface border border-green-500 rounded-lg p-3'>
              <span className='text-4xl font-bold text-green-400'>{selectedEmployee.tasksCount.completed}</span>
              <span>✅ DONE</span>
            </div>
            <div className='flex flex-col justify-between items-center bg-surface border border-red-500 rounded-lg p-3'>
              <span className='text-4xl font-bold text-red-400'>{selectedEmployee.tasksCount.failed}</span>
              <span>❌ FAILED</span>
            </div>
          </>
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {selectedEmployee.tasks.map(task => (
          <div key={task.id} className='flex flex-col gap-3 bg-card px-3 py-3 rounded-lg'>

            <div className='flex justify-between'>
              <span className='bg-surface text-accent font-semibold px-2 rounded-lg'>{task.category}</span>
              <span className={`border font-medium px-2 py-0 rounded-xl text-sm ${task.newTask && 'text-blue-500' || task.active && 'text-yellow-500' || task.completed && 'text-green-500' || task.failed && 'text-red-500'}`}>{
                task.newTask && 'New' || task.active && 'Active' || task.completed && 'Completed' || task.failed && 'Failed'
              }</span>
            </div>

            <div className='flex flex-col gap-1 my-2 flex-1'>
              <span className='text-xl font-bold tracking-tight'>{task.taskTitle}</span>
              <p className='text-sm text-secondary'>{task.taskDescription}</p>
              <span className='text-sm text-accent mt-2'>{task.taskDate}</span>
            </div>

            <Button variant='ghost' id="del-btn" onClick={() => {
              deleteTask(task.id);
            }}>Delete</Button>

          </div>
        ))}
      </div>

      {/* for empty state: */}
      {
        selectedEmployee.tasks.length === 0 && (
          <p className='text-muted text-center py-8'>
            No tasks assigned to this employee yet.
          </p>
        )
      }

    </div>
  )
}

export default AllTasks