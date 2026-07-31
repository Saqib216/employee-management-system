import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

// Determine card status from task flags
const getStatus = (task) => {
    if (task.active) return { label: 'Active', dot: 'bg-warning', text: 'text-warning' };
    if (task.completed) return { label: 'Completed', dot: 'bg-success', text: 'text-success' };
    if (task.failed) return { label: 'Failed', dot: 'bg-danger', text: 'text-danger' };
    return { label: 'New', dot: 'bg-info', text: 'text-info' };
}

// (statusStyle removed — now using dot + label from getStatus)

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
        <div className='flex flex-col gap-3 bg-card border border-border rounded-md p-4 hover:border-border-hover transition-colors duration-200'>

            {/* Card Header: Category chip + Status dot+label */}
            <div className='flex items-center justify-between'>
                <span className='text-[11px] font-semibold uppercase tracking-wider text-muted px-2 py-0.5 bg-surface rounded-md border border-border'>
                    {task.category}
                </span>
                <span className={`flex items-center gap-1.5 text-xs font-medium ${status.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
                    {status.label}
                </span>
            </div>

            {/* Task Title & Description */}
            <div className='flex flex-col gap-1 flex-1'>
                <h3 className='text-base font-semibold tracking-tight text-primary leading-snug'>{task.taskTitle}</h3>
                <p className='text-xs text-muted line-clamp-2 leading-relaxed'>{task.taskDescription}</p>
            </div>

            {/* Card Footer: Deadline + Action buttons */}
            <div className='flex items-center justify-between pt-2 border-t border-border'>
                {/* Deadline countdown — only for new/active */}
                {(status.label === 'Active' || status.label === 'New') ? (
                    <span className={`text-[11px] font-semibold ${urgencyClass}`}>
                        {daysLeft > 0 && `⏳ ${daysLeft}d left`}
                        {daysLeft === 0 && '⚠️ Due today'}
                        {daysLeft < 0 && `🔴 Overdue ${Math.abs(daysLeft)}d`}
                    </span>
                ) : (
                    <span className='text-xs text-muted flex items-center gap-1.5'>
                        <i className='fa-regular fa-calendar text-[11px]'></i>
                        {task.taskDate}
                    </span>
                )}

                {/* Action buttons */}
                <div className='flex gap-2'>
                    {status.label === 'New' && (
                        <button onClick={markAccepted}
                            className='text-xs font-medium px-3 py-1.5 rounded-md bg-info/10 text-info border border-info/20 hover:bg-info/20 cursor-pointer transition-colors'
                            title="Accept task"
                        >
                            Accept
                        </button>
                    )}
                    {status.label === 'Active' && (
                        <>
                            <button onClick={markCompleted}
                                className='text-xs font-medium px-3 py-1.5 rounded-md bg-success/10 text-success border border-success/20 hover:bg-success/20 cursor-pointer transition-colors'
                                title="Mark as completed"
                            >
                                Complete
                            </button>
                            <button onClick={markFailed}
                                className='text-xs font-medium px-3 py-1.5 rounded-md bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20 cursor-pointer transition-colors'
                                title="Mark as failed"
                            >
                                Failed
                            </button>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default TaskCard
