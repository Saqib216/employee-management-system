import React, { useContext, useState } from 'react'
import Button from './Button';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const employees = userData.employees;
        const admin = userData.admin;

        employees.forEach(employee => {
            if (assignTo.toLowerCase() === employee.name.split(' ')[0].toLowerCase()) {
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

                <div className='flex justify-between m-10 bg-card p-10 rounded-xl'>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Task Title</h3>
                            <input value={taskTitle} onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }} type="text" placeholder='Make a Navbar component in react' className='outline-none border border-accent rounded-lg p-2 w-[500px]' />
                        </div>

                        <div>
                            <h3>Description</h3>
                            <textarea value={taskDescription} onChange={(e) => {
                                setTaskDescription(e.target.value);
                            }} placeholder='Add Description' className='outline-none border border-accent rounded-lg p-2 w-[500px] min-h-[200px]'></textarea>
                        </div>

                        <div>
                            <h3>Date</h3>
                            <input value={taskDate} onChange={(e) => {
                                setTaskDate(e.target.value);
                            }} type="date" className='outline-none border border-accent rounded-lg p-2 w-[500px]' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3>Assign to</h3>
                            <select onChange={(e) => {
                                setAssignTo(e.target.value);
                            }} id="employee-names" className='outline-none border border-accent rounded-lg p-2 w-[500px]' value={assignTo}>
                                {userData.employees.map((employee, idx) => {
                                    return <option className='text-black' key={idx} value={employee.name}>{employee.name}</option>
                                })}
                            </select>

                        </div>

                        <div>
                            <h3>Category</h3>
                            <input value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder='programming, dev, design, etc...' className='outline-none border border-accent rounded-lg p-2 w-[500px]' />
                        </div>

                        <Button id="create-task-btn" variant="primary">Create Task</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask