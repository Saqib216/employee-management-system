import React from 'react'

const TaskListOverview = () => {
    return (
        <div>
            <div id='task-list-overview' className='flex gap-5 margin'>
                <div id='task' className='flex flex-col bg-accent px-8 py-3 rounded-xl w-[25%]'>
                    <h2>0</h2>
                    <p>New Task</p>
                </div>
            </div> 
        </div>
    )
}

export default TaskListOverview