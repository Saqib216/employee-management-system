import React from 'react'

const AcceptedTask = () => {
    return (
        <div className='flex flex-col gap-6 bg-card w-[25%] h-[300px] p-4 rounded-xl shrink-0'>
            <div className='flex justify-between'>
                <h2 className='bg-red-600 rounded-lg px-3 py-1 text-sm'>High</h2>
                <p className='text-sm text-secondary'>July 11, 2026</p>
            </div>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente doloribus, inventore dolor quibusdam voluptates ut quidem eaque repudiandae! Atque, sit.</p>

            <div>
                <button className='bg-green-600 rounded-lg px-2 py-1 text-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default AcceptedTask