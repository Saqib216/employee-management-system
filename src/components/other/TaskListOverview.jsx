import React from 'react'

const TaskListOverview = ({employeeData}) => {
    return (
        <div>
            <div id='task-list-overview' className='flex gap-5 margin'>
                <div id='task' className='flex flex-col bg-accent px-8 py-3 rounded-xl w-[25%]'>
                    <h2>{employeeData.tasksCount.newTask}</h2>
                    <p>New Task</p>
                </div>
                <div id='task' className='flex flex-col bg-[#ffbf35] px-8 py-3 rounded-xl w-[25%]'>
                    <h2>{employeeData.tasksCount.completed}</h2>
                    <p>Completed Task</p>
                </div>
                <div id='task' className='flex flex-col bg-[#155d40] px-8 py-3 rounded-xl w-[25%]'>
                    <h2>{employeeData.tasksCount.active}</h2>
                    <p>Accepted Task</p>
                </div>
                <div id='task' className='flex flex-col bg-[#ed5668] px-8 py-3 rounded-xl w-[25%]'>
                    <h2>{employeeData.tasksCount.failed}</h2>
                    <p>Failed Task</p>
                </div>
            </div> 
        </div>
    )
}

export default TaskListOverview