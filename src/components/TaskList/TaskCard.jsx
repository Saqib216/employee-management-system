import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

// Determine card status from task flags
const getStatus = (task) => {
    if (task.newTask) return 'new';
    if (task.active) return 'active';
    if (task.completed) return 'completed';
    if (task.failed) return 'failed';
    return 'unknown';
}

// Badge color per status
const statusStyle = {
    new: 'bg-blue-600',
    active: 'bg-yellow-500',
    completed: 'bg-green-700',
    failed: 'bg-red-700',
}

// Func to get the due date text color
const getTextColor = (daysLeft) => {
    if (daysLeft > 5) return 'text-green-400';
    if (daysLeft > 1) return 'text-yellow-400';
    if (daysLeft === 1) return 'text-orange-400';
    if (daysLeft <= 0) return 'text-red-400';
}

const TaskCard = ({ task }) => {
    const [userData, setUserData] = useContext(AuthContext);
    const status = getStatus(task);

    const today = new Date();
    const taskDeadline = new Date(task.taskDate);

    const diffMs = taskDeadline - today; // diff in milliseconds
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    const urgencyClass = getTextColor(daysLeft);

    // Generic update function - pass in the new flag values
    const updateTask = (newFlags) => {
        const updatedEmployees = userData.employees.map((employee) => {
            const hasThisTask = employee.tasks.find(t => t.id === task.id);

            if (hasThisTask) {
                const updatedTasks = employee.tasks.map((t) =>
                    t.id === task.id ? { ...t, ...newFlags } : t
                );

                // Recalculate tasksCount from actual tasks 
                const newCount = {
                    active: updatedTasks.filter(t => t.active).length,
                    completed: updatedTasks.filter(t => t.completed).length,
                    newTask: updatedTasks.filter(t => t.newTask).length,
                    failed: updatedTasks.filter(t => t.failed).length,
                };

                return { ...employee, tasks: updatedTasks, tasksCount: newCount };
            }
            return employee;
        });

        setUserData({ ...userData, employees: updatedEmployees });
    }

    const markAccepted = () => updateTask({ active: true, newTask: false, completed: false, failed: false });
    const markCompleted = () => updateTask({ active: false, newTask: false, completed: true, failed: false });
    const markFailed = () => updateTask({ active: false, newTask: false, completed: false, failed: true });

    return (
        <div className='flex flex-col gap-6 bg-card w-[25%] h-75 p-4 rounded-xl shrink-0'>
            {(status === 'active' || status === 'new') &&
                (
                    <div className="flex justify-end">
                        <p className={`${urgencyClass} font-semibold bg-surface rounded-lg py-1 px-2`}>
                            {(daysLeft > 0 && `⏳ ${daysLeft} day${daysLeft === 1 ? '' : 's'} remaining`) ||
                                (daysLeft === 0 && `⚠️ Due Today`) ||
                                (daysLeft < 0 && `🔴 Overdue by ${Math.abs(daysLeft)} days!`)}
                        </p>
                    </div>
                )
            }
            {/* Top row: category + date */}
            <div className='flex justify-between items-center'>
                <span className={`${statusStyle[status]} rounded-lg px-3 py-1 text-xs font-semibold`}>
                    {task.category}
                </span>
                <p className='text-sm text-secondary'>{task.taskDate}</p>
            </div>

            {/* Task info */}
            <div className='flex-1'>
                <h2 className='font-semibold text-xl mb-1'>{task.taskTitle}</h2>
                <p className='text-sm text-secondary line-clamp-3'>{task.taskDescription}</p>
            </div>

            {/* Action buttons : depend on current status */}
            <div className='flex justify-between gap-2'>
                {status === 'new' && (
                    <button
                        onClick={markAccepted}
                        className='bg-blue-600 rounded-lg px-3 py-1 text-sm cursor-pointer hover:opacity-80 transition-opacity'
                    >
                        Accept Task
                    </button>
                )}

                {status === 'active' && (
                    <>
                        <button
                            onClick={markCompleted}
                            className='bg-green-600 rounded-lg px-3 py-1 text-sm cursor-pointer hover:opacity-80 transition-opacity'
                        >
                            Mark Completed
                        </button>
                        <button
                            onClick={markFailed}
                            className='bg-red-600 rounded-lg px-3 py-1 text-sm cursor-pointer hover:opacity-80 transition-opacity'
                        >
                            Mark Failed
                        </button>
                    </>
                )}

                {status === 'completed' && (
                    <span className='text-green-500 text-sm font-semibold'>✓ Completed</span>
                )}

                {status === 'failed' && (
                    <span className='text-red-500 text-sm font-semibold'>✗ Failed</span>
                )}
            </div>
        </div>
    )
}

export default TaskCard
