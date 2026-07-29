import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({ employeeData }) => {
    return (
        <div className=' mx-10 mt-5'>
            <div className='flex flex-col gap-1 mb-6'>
                <h2 className='font-semibold text-2xl tracking-tight text-primary'>My Tasks</h2>
                <p className='text-sm text-muted'>Your assigned tasks and their current status.</p>
            </div>

            <div id='task-list' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6'>
                {employeeData.tasks.length === 0 ? (
                    <div className='col-span-3 flex flex-col items-center gap-3 py-20'>
                        <div className='w-12 h-12 flex items-center justify-center bg-card border border-border rounded-md'>
                            <i className='fa-regular fa-circle-check text-xl text-muted'></i>
                        </div>
                        <p className='text-sm font-medium text-secondary'>No tasks assigned yet</p>
                        <p className='text-xs text-muted'>Check back later or contact your admin.</p>
                    </div>
                ) : (
                    employeeData.tasks.map((task, idx) => (
                        <TaskCard key={task.id || idx} task={task} />
                    ))
                )}
            </div>
        </div>
    )
}

export default TaskList