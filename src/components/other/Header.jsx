import { Link } from 'react-router-dom';
import Button from './Button';

const Header = ({ handleLogout, employeeData, adminData }) => {
    const userName = employeeData?.name || adminData?.name || 'User';
    const isAdmin = Boolean(adminData);
    const roleLabel = isAdmin ? 'Admin' : 'Employee';

    return (
        <header className='w-full px-6 py-3 border-b border-border bg-surface/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-40 mb-8'>

            <div className='flex gap-4 items-center'>
                <Link to='/' className='flex items-center gap-3 group'>
                    <div className='w-9 h-9 flex items-center justify-center bg-card border border-border rounded-lg group-hover:border-border-hover transition-colors duration-150 ease-in-out'>
                        <span className='text-accent font-bold text-base'>W</span>
                    </div>
                    <h2 className='text-sm font-semibold tracking-wider uppercase text-primary'>Workforce Pro</h2>
                </Link>

                <span className='w-[1px] h-5 bg-border'></span>

                <div className='flex items-center gap-3'>
                    <h2 className='text-base font-medium text-primary'>
                        Hello, <span className='font-semibold text-primary'>{(userName === adminData?.name) ? userName.split(' ').slice(0, 2).join(' ') : userName.split(' ')[0]}</span> 👋
                    </h2>

                    {/* Role Pill */}
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${isAdmin
                            ? 'bg-accent/10 text-accent border-accent/20'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                        {roleLabel}
                    </span>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:text-primary cursor-pointer transition-all duration-200"
                >
                    <i className="fa-solid fa-moon text-sm"></i>
                </button>

                <Button variant="secondary" id="logout-btn" onClick={handleLogout} class_="px-3.5 py-1.5 text-xs font-semibold">
                    Log out
                </Button>
            </div>
        </header>
    )
}

export default Header