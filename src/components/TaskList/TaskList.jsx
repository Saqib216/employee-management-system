import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({ employeeData }) => {
    return (
        <div>
            <div id='task-list' className='mt-15 w-full flex gap-3 overflow-x-auto flex-nowrap'>
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