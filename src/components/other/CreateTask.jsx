import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form>
                <div className='font-semibold text-3xl text-center'>Create Task</div>

                <div className='flex justify-between w-[80%] m-auto mt-8 bg-card p-10 rounded-xl'>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" placeholder='Make a Navbar component in react' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>

                        <div>
                            <h3>Description</h3>
                            <textarea placeholder='Add Description' className='outline-none border border-accent rounded-lg p-2 w-[400px] min-h-[200px]'></textarea>
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input type="date" className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Assign to</h3>
                            <input type="text" placeholder='Employee Name...' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>

                        <div>
                            <h3>Category</h3>
                            <input type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateTask