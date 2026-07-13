import React from 'react'

const AllTasks = () => {
  return (
    <div className='bg-card p-4 m-10 rounded-xl flex flex-col gap-3'>
        <div className='flex justify-between bg-accent p-3 rounded-xl max-auto'>
            <p>Saqib</p>
            <p>Make a react component</p>
            <p>Status</p>
        </div>
        <div className='flex justify-between bg-[#4bb0eb] p-3 rounded-xl max-auto'>
            <p>Saqib</p>
            <p>Make a react component</p>
            <p>Status</p>
        </div>
        <div className='flex justify-between bg-[#c27dff] p-3 rounded-xl max-auto'>
            <p>Saqib</p>
            <p>Make a react component</p>
            <p>Status</p>
        </div>
    </div>
  )
}

export default AllTasks