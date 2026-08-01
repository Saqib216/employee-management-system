import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

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

  // Stat card config
  const stats = [
    { label: 'New', count: selectedEmployee.tasksCount.newTask, color: 'text-info', border: 'border-info/20', dot: 'bg-info' },
    { label: 'Active', count: selectedEmployee.tasksCount.active, color: 'text-warning', border: 'border-warning/20', dot: 'bg-warning' },
    { label: 'Completed', count: selectedEmployee.tasksCount.completed, color: 'text-success', border: 'border-success/20', dot: 'bg-success' },
    { label: 'Failed', count: selectedEmployee.tasksCount.failed, color: 'text-danger', border: 'border-danger/20', dot: 'bg-danger' },
  ];

  // Task status helper
  const getStatus = (task) => {
    if (task.active) return { label: 'Active', dot: 'bg-warning', text: 'text-warning' };
    if (task.completed) return { label: 'Completed', dot: 'bg-success', text: 'text-success' };
    if (task.failed) return { label: 'Failed', dot: 'bg-danger', text: 'text-danger' };
    return { label: 'New', dot: 'bg-info', text: 'text-info' };
  };

  return (
    <div className='mx-4 sm:mx-10 mb-10'>

      {/* Section Header */}
      <div className='flex flex-col gap-1 mb-6'>
        <h2 className='font-semibold text-xl sm:text-2xl tracking-tight text-primary'>Employee Tasks</h2>
        <p className='text-sm text-muted font-medium'>View and manage tasks assigned to each employee.</p>
      </div>

      {/* Employee Tab Pills */}
      <div className='flex gap-2 overflow-x-auto mb-6 border-b border-border pb-3 no-scrollbar whitespace-nowrap'>
        {userData.employees.map(employee => {
          const isActive = selectedEmployee.email === employee.email;
          return (
            <button
              key={employee.id}
              onClick={() => setSelectedEmployee(employee)}
              className={`flex items-center gap-2 py-1 px-4 rounded-md text-sm font-medium cursor-pointer transition-all duration-200
                ${isActive
                  ? 'bg-accent text-surface shadow-sm'
                  : 'bg-card text-secondary border border-border hover:border-border-hover hover:text-primary'
                }`}
            >
              {employee.name.split(' ')[0]}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold
                ${isActive ? 'bg-primary/50 text-surface' : 'bg-surface text-muted'}`}>
                {employee.tasks.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stat Cards */}
      {selectedEmployee.tasks.length > 0 && (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8'>
          {stats.map(stat => (
            <div key={stat.label} className={`bg-card border ${stat.border} rounded-md p-4 flex flex-col gap-2`}>
              <div className='flex items-center gap-2'>
                <span className={`w-1.5 h-1.5 rounded-full ${stat.dot}`}></span>
                <span className='text-xs font-semibold uppercase tracking-wider text-muted'>{stat.label}</span>
              </div>
              <span className={`text-2xl sm:text-3xl font-bold tracking-tight font-mono ${stat.color}`}>{stat.count}</span>
            </div>
          ))}
        </div>
      )}

      {/* Task Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {selectedEmployee.tasks.map(task => {
          const status = getStatus(task);
          return (
            <div key={task.id} className='flex flex-col gap-3 bg-card border border-border rounded-md p-3 sm:p-4 hover:border-border-hover transition-colors duration-200'>

              {/* Card Header: Category + Status */}
              <div className='flex items-center justify-between'>
                <span className='text-[11px] font-semibold uppercase tracking-wider text-muted px-2 py-0.5 bg-surface rounded-md border border-border'>
                  {task.category}
                </span>
                <span className={`flex items-center gap-1.5 text-xs font-medium ${status.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
                  {status.label}
                </span>
              </div>

              {/* Task Title & Description */}
              <div className='flex flex-col gap-1 flex-1'>
                <h3 className='text-base font-semibold tracking-tight text-primary leading-snug'>{task.taskTitle}</h3>
                <p className='text-xs text-muted line-clamp-2 leading-relaxed'>{task.taskDescription}</p>
              </div>

              {/* Card Footer: Date + Delete */}
              <div className='flex items-center justify-between pt-2 border-t border-border'>
                <span className='text-xs text-muted font-medium flex items-center gap-1.5'>
                  <i className='fa-regular fa-calendar text-[11px]'></i>
                  {task.taskDate}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className='flex items-center gap-1.5 text-xs text-muted hover:text-danger cursor-pointer transition-colors duration-150 font-medium'
                  title='Delete task'
                >
                  <i className='fa-regular fa-trash-can text-[13px]'></i>
                  Delete
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {selectedEmployee.tasks.length === 0 && (
        <div className='flex flex-col items-center justify-center gap-3 py-20 text-center'>
          <div className='w-12 h-12 flex items-center justify-center bg-card border border-border rounded-md'>
            <i className='fa-regular fa-folder-open text-xl text-muted'></i>
          </div>
          <p className='text-sm font-medium text-secondary'>No tasks assigned yet</p>
          <p className='text-xs text-muted'>Use the form below to assign a task to {selectedEmployee.name.split(' ')[0]}.</p>
        </div>
      )}

    </div>
  )
}

export default AllTasks