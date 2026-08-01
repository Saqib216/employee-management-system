import { Link } from 'react-router-dom';
import Button from './Button';
import { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';

const Header = ({ handleLogout, employeeData, adminData }) => {
    const userName = employeeData?.name || adminData?.name || 'User';
    const isAdmin = Boolean(adminData);
    const roleLabel = isAdmin ? 'Admin' : 'Employee';

    const [confirmLogout, setConfirmLogout] = useState(false);

    const {isDark, toggleTheme} = useTheme();

    return (
        <header className='w-full px-4 sm:px-6 py-3 border-b border-border bg-surface/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-40 mb-8'>

            <div className='flex gap-4 items-center'>
                <Link to='/' className='flex items-center gap-3 group'>
                    <div className='w-9 h-9 flex items-center justify-center bg-card border border-border rounded-lg group-hover:border-border-hover transition-colors duration-150 ease-in-out'>
                        <span className='text-accent font-bold text-base'>W</span>
                    </div>
                    <h2 className='text-sm font-semibold tracking-tight uppercase text-primary'>Workforce Pro</h2>
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
                    onClick={toggleTheme}
                    title='Toggle theme'
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:text-primary cursor-pointer transition-all duration-200"
                >
                    <i className={`fa-solid ${isDark? 'fa-moon' : 'fa-sun'} text-sm`}></i>
                </button>

                {confirmLogout ? (
                    <div className='flex items-center gap-2'>
                        <span className='text-xs text-muted'>{userName === adminData?.name ? `Sure, ${userName.split(' ')[1]}` : `Sure, ${userName.split(' ')[0]}`}?</span>
                        <Button onClick={() => setConfirmLogout(false)} variant='secondary' id="cancel-btn" class_="text-xs px-2 text-secondary py-1 hover:text-primary" title="Cancel Logout">
                            Cancel
                        </Button>
                        <Button onClick={handleLogout} variant='danger' id="logout-btn-2" class_="text-xs px-2 py-1" title="Logout">
                            Log out
                        </Button>
                    </div>
                ) : (
                    <Button variant="secondary" id="logout-btn" onClick={() => setConfirmLogout(true)} class_="px-3.5 py-1.5 text-xs font-semibold" title="Logout">
                        Log out
                    </Button>
                )
                }
            </div>
        </header>
    )
}

export default Header