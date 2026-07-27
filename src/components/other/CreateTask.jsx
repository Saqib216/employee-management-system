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
                <div className='fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-bounce-in'>
                    <p className='bg-green-800 border border-green-500 text-green-200 px-6 py-3 rounded-xl shadow-lg tracking-wide text-base font-semibold flex items-center gap-2'>
                        ✅ {message}
                    </p>
                </div>
            )}

            <form id="task-form" className='flex flex-col gap-8 m-10' onSubmit={(e) => {
                submitHandler(e);
            }}>

                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2 h-fit items-center '>
                        <p className='border border-border h-9 w-9 rounded-full flex font-semibold text-muted hover:border-border-hover items-center justify-center transition-all duration-150'>
                            <i class="fa-solid fa-plus"></i>
                        </p>
                        <div className='font-semibold text-2xl tracking-tight'>Assign Tasks</div>
                    </div>
                    <p className='text-sm text-secondary tracking-tight font-medium'>Create and assign a new task to the employees</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <div>
                        <h3 className='flex gap-1'>Task Title <span className='text-red-700 text-xl'>*</span></h3>
                        <input required value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value);
                        }} type="text" placeholder='Make a Navbar component in react' className='border border-border rounded-lg p-2 bg-surface w-125' />
                    </div>

                    <div>
                        <h3 className='flex gap-1'>Assign to <span className='text-red-700 text-xl'>*</span></h3>
                        <select
                            onChange={(e) => setAssignTo(e.target.value)}
                            id="employee-names"
                            className='rounded-lg p-2 w-125'
                            value={assignTo}
                        >
                            {userData.employees.map((employee, idx) => (
                                <option className='' key={idx} value={employee.name}>
                                    {employee.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h3 className='flex gap-1'>Category <span className='text-red-700 text-xl'>*</span></h3>
                        <input required value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-border rounded-lg p-2 w-125 bg-surface' />
                    </div>

                    <div>
                        <h3 className='flex gap-1'>Date <span className='text-red-700 text-xl'>*</span></h3>
                        <input required value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value);
                        }} type="date" className='border border-border rounded-lg p-2 w-125 bg-surface text-primary' />
                    </div>

                    <div className='flex flex-col gap-2 col-span-2'>
                        <h3>Description</h3>
                        <textarea value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }} placeholder='Add Description' className='border border-border rounded-lg p-2 w-125 min-h-50 bg-surface
                        '></textarea>
                    </div>

                    <Button id="create-task-btn" variant="primary" class_="h-fit w-fit px-3 py-1">Create Task</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask