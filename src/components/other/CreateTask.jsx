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

            <form id="task-form" onSubmit={(e) => {
                submitHandler(e);
            }}>
                <div className='font-semibold text-3xl text-center'>Assign Tasks</div>

                <div className='flex justify-between m-10 bg-card p-10 rounded-xl'>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Task Title</h3>
                            <input required value={taskTitle} onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }} type="text" placeholder='Make a Navbar component in react' className='outline-none border border-accent rounded-lg p-2 w-125 bg-surface' />
                        </div>

                        <div>
                            <h3>Description</h3>
                            <textarea required value={taskDescription} onChange={(e) => {
                                setTaskDescription(e.target.value);
                            }} placeholder='Add Description' className='outline-none border border-accent rounded-lg p-2 w-125 min-h-50 bg-surface'></textarea>
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input required value={taskDate} onChange={(e) => {
                                setTaskDate(e.target.value);
                            }} type="date" className='outline-none border border-accent rounded-lg p-2 w-125 bg-surface' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Assign to</h3>

                            <div className='select-wrapper'>
                                <select
                                    onChange={(e) => setAssignTo(e.target.value)}
                                    id="employee-names"
                                    className='outline-none rounded-lg p-2 w-125'
                                    value={assignTo}
                                >
                                    {userData.employees.map((employee, idx) => (
                                        <option className='' key={idx} value={employee.name}>
                                            {employee.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div>
                            <h3>Category</h3>
                            <input required value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-accent rounded-lg p-2 w-125 bg-surface' />
                        </div>

                        <Button id="create-task-btn" variant="primary">Create Task</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask