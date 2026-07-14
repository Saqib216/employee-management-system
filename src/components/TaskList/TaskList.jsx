import React from 'react'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import AcceptedTask from './AcceptedTask'

const TaskList = ({ employeeData }) => {
    return (
        <div>
            <div id='task-list' className='mt-15 w-full flex gap-3 overflow-x-auto flex-nowrap'>
                {employeeData.tasks.map((task, idx) => {
                    if (task.newTask) {
                        return <NewTask key={idx} task={task}/>
                    }
                    if (task.active) {
                        return <AcceptedTask key={idx} task={task}/>
                    }
                    if (task.completed) {
                        return <CompletedTask key={idx} task={task}/>
                    }
                    if (task.failed) {
                        return <FailedTask key={idx} task={task}/>
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList