import React, { useContext, useState } from 'react'
import Button from './Button';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState(userData?.employees[0]?.name || '');
    const [category, setCategory] = useState('');

    const [message, setMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const employees = userData.employees;
        const admin = userData.admin;

        employees.forEach(employee => {
            if (assignTo === employee.name) {
                const id = `task${String(employee.tasks.length + 1).padStart(3, '0')}`;
                const newTask = {
                    id,
                    active: false,
                    newTask: true,
                    completed: false,
                    failed: false,
                    taskTitle,
                    taskDescription,
                    taskDate,
                    category
                };
                employee.tasks.push(newTask);
                employee.tasksCount.newTask += 1;
            }

        });

        setUserData({ employees, admin });

        setMessage(`Task assigned to ${assignTo} successfully!`);
        setTimeout(() => {
            setMessage('');
        }, 3000);


        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    }
    return (
        <div>
            {message && (
                <div className='fixed bottom-6 right-6 z-50 animate-bounce-in flex items-center gap-3 bg-card border border-border px-4 py-3 rounded-md shadow-2xl backdrop-blur-md transition-all duration-300'>
                    <i className="fa-solid fa-circle-check text-success text-sm"></i>
                    <p className='text-xs font-medium text-primary tracking-tight'>
                        {message}
                    </p>
                    <button
                        onClick={() => setMessage('')}
                        className='text-muted hover:text-primary transition-colors ml-2 text-xs cursor-pointer'
                        title='Close'
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )}

            <form id="task-form" className='flex flex-col gap-8 m-10' onSubmit={(e) => {
                submitHandler(e);
            }}>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2 h-fit items-center '>
                        <a className='border border-border h-9 w-9 rounded-full flex font-semibold text-muted hover:border-border-hover hover:text-primary items-center justify-center transition-all duration-150' href='#taskDesc' >
                            <i class="fa-solid fa-plus"></i>
                        </a>
                        <div className='font-semibold text-2xl tracking-tight'>Assign Tasks</div>
                    </div>
                    <p className='text-sm text-secondary tracking-tight font-medium'>Create and assign a new task to the employees</p>
                </div>

                <div className='grid lg:grid-cols-5 gap-x-6 gap-y-5 pl-6'>

                    <div className='col-span-3 flex flex-col gap-1'>
                        <h3 className='flex gap-1 items-center'>Task Title <span className='w-1.5 h-1.5 rounded-full bg-danger inline-block'></span>
                        </h3>
                        <input required value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value);
                        }} type="text" placeholder='Make a Navbar component in react' className='border border-border rounded-md p-2 bg-card w-full placeholder:text-muted transition-all duration-150 ease-in-out hover:border-muted focus:border-primary focus:ring-4 focus:ring-focus-ring' />
                    </div>

                    <div className='col-span-2 flex flex-col gap-1'>
                        <h3 className='flex gap-1 items-center'>Assign to <span className='w-1.5 h-1.5 rounded-full bg-danger inline-block'></span></h3>
                        <select
                            onChange={(e) => setAssignTo(e.target.value)}
                            id="employee-names"
                            className='rounded-md p-2 w-full transition-all duration-150 ease-in-out '
                            value={assignTo}
                        >
                            {userData.employees.map((employee, idx) => (
                                <option className='' key={idx} value={employee.name}>
                                    {employee.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='col-span-2 flex flex-col gap-1'>
                        <h3 className='flex gap-1 items-center'>Category <span className='w-1.5 h-1.5 rounded-full bg-danger inline-block'></span></h3>
                        <input required value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-border rounded-md p-2 w-full placeholder:text-muted bg-card transition-all duration-150 ease-in-out hover:border-muted focus:border-primary focus:ring-4 focus:ring-focus-ring' />
                    </div>

                    <div className='col-span-2 flex flex-col gap-1'>
                        <h3 className='flex gap-1 items-center'>Date <span className='w-1.5 h-1.5 rounded-full bg-danger inline-block'></span></h3>
                        <input required value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value);
                        }} type="date" className='border border-border rounded-md p-2 w-full placeholder:text-muted bg-card text-primary transition-all duration-150 ease-in-out hover:border-muted' />
                    </div>

                    <div className='flex flex-col gap-1 col-span-5' id='taskDesc'>
                        <h3>Description</h3>
                        <textarea value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }} placeholder='Add Description' className='border border-border rounded-md p-2 w-full placeholder:text-muted min-h-50 bg-card
                        transition-all duration-150 ease-in-out hover:border-muted focus:border-primary focus:ring-4 focus:ring-focus-ring'></textarea>
                    </div>
                </div>
                <div className='flex justify-end pl-6 mt-2'>
                    <Button id="create-task-btn" variant="primary" class_="px-5 py-2 text-sm hover:bg-accent tracking-tight">Create Task</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask