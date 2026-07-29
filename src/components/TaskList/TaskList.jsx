import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({ employeeData }) => {
    return (
        <div>
            <div id='task-list' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 mt-5'>
                {employeeData.tasks.length === 0 ? (
                    <p className='text-secondary text-sm'>No tasks assigned yet 🎉</p>
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