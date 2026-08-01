const TaskListOverview = ({ employeeData }) => {
    const stats = [
        {
            label: 'New',
            count: employeeData.tasksCount.newTask,
            color: 'text-info',
            border: 'border-info/20',
            dot: 'bg-info/70'
        },
        {
            label: 'Active',
            count: employeeData.tasksCount.active,
            color: 'text-warning',
            border: 'border-warning/20',
            dot: 'bg-warning/70'
        },
        {
            label: 'Completed',
            count: employeeData.tasksCount.completed,
            color: 'text-success',
            border: 'border-success/20',
            dot: 'bg-success/70'
        },
        {
            label: 'Failed',
            count: employeeData.tasksCount.failed,
            color: 'text-danger',
            border: 'border-danger/20',
            dot: 'bg-danger/70'
        },
    ];

    // For progress bar:
    const total = employeeData.tasksCount.newTask + employeeData.tasksCount.active + employeeData.tasksCount.completed + employeeData.tasksCount.failed;

    return (
        <div className="mx-4 sm:mx-10 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <h2 className='font-semibold text-2xl tracking-tight text-primary'>Overview</h2>
                <p className='text-sm text-muted'>Get a quick overview of your performance.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8'>
                {stats.map(stat => {
                    const percent = total > 0 ? Math.round((stat.count / total) * 100) : 0;
                    return <div key={stat.label} className={`bg-card border ${stat.border} rounded-md p-4 flex flex-col gap-2`}>
                        <div className='flex items-center gap-2'>
                            <span className={`w-1.5 h-1.5 rounded-full ${stat.dot}`}></span>
                            <span className='text-xs font-semibold uppercase tracking-wider text-muted'>{stat.label}</span>
                        </div>
                        <span className={`text-3xl font-bold tracking-tight font-mono ${stat.color}`}>
                            {stat.count}
                        </span>
                        {/* progress bar: */}
                        <div className='w-full h-1 bg-surface rounded-full mt-1'>
                            <div
                                className={`h-1 rounded-full ${stat.dot} transition-all duration-500`}
                                style={{ width: `${percent}%` }}
                            >
                            </div>
                        </div>
                    </div>
                })}
            </div >
        </div>
    )
}

export default TaskListOverview