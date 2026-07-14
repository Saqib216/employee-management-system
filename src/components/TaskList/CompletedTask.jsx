import React from 'react'

const CompletedTask = ({task}) => {
    return (
        <div className='flex flex-col gap-6 bg-card w-[25%] h-[300px] p-4 rounded-xl shrink-0'>
            <div className='flex justify-between'>
                <h2 className='bg-red-600 rounded-lg px-3 py-1 text-sm'>{task.category}</h2>
                <p className='text-sm text-secondary'>{task.taskDate}</p>
            </div>

            <div>
                <h2 className='font-semibold text-xl'>{task.taskTitle}</h2>
                <p className='text-sm'>{task.taskDescription}</p>
            </div>

            <div>
                <button className='bg-green-600 rounded-lg px-2 py-1 text-sm'>Completed</button>
            </div>
        </div>
    )
}

export default CompletedTask