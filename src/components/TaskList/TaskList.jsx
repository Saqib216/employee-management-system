import React from 'react'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import AcceptedTask from './AcceptedTask'

const TaskList = () => {
    return (
        <div>
            <div id='task-list' className='mt-15 w-full flex gap-3 overflow-x-auto flex-nowrap'>
                <NewTask />
                <AcceptedTask />
                <CompletedTask />
                <FailedTask />
            </div>
        </div>
    )
}

export default TaskList