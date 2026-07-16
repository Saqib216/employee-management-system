import React, { useState } from 'react'
import Button from './Button';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
        
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e);
            }}>
                <div className='font-semibold text-3xl text-center'>Assign Tasks</div>

                <div className='flex justify-between w-[80%] m-auto mt-8 bg-card p-10 rounded-xl'>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Task Title</h3>
                            <input value={taskTitle} onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }} type="text" placeholder='Make a Navbar component in react' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>

                        <div>
                            <h3>Description</h3>
                            <textarea value={taskDescription} onChange={(e) => {
                                setTaskDescription(e.target.value);
                            }} placeholder='Add Description' className='outline-none border border-accent rounded-lg p-2 w-[400px] min-h-[200px]'></textarea>
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input value={taskDate} onChange={(e) => {
                                setTaskDate(e.target.value);
                            }} type="date" className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Assign to</h3>
                            <input value={assignTo} onChange={(e) => {
                                setAssignTo(e.target.value);
                            }} type="text" placeholder='Employee Name...' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>

                        <div>
                            <h3>Category</h3>
                            <input value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-accent rounded-lg p-2 w-[400px]' />
                        </div>

                        <Button id="create-task-btn" variant="primary">Create Task</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask