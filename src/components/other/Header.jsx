import { Link } from 'react-router-dom';
import Button from './Button';
import { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';

const Header = ({ handleLogout, employeeData, adminData }) => {
    const userName = employeeData?.name || adminData?.name || 'User';
    const isAdmin = Boolean(adminData);
    const roleLabel = isAdmin ? 'Admin' : 'Employee';

    const [confirmLogout, setConfirmLogout] = useState(false);

    const { isDark, toggleTheme } = useTheme();

    return (
        <header className='w-full px-3 sm:px-6 py-2.5 sm:py-3 border-b border-border bg-surface/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-40 mb-6 sm:mb-8 gap-2'>

            {/* Left Section: Logo + Greeting + Role Pill */}
            <div className='flex gap-2 sm:gap-4 items-center min-w-0'>
                <Link to='/' className='flex items-center gap-2 sm:gap-3 group shrink-0'>
                    <div className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-card border border-border rounded-lg group-hover:border-border-hover transition-colors duration-150 ease-in-out'>
                        <span className='text-accent font-bold text-sm sm:text-base'>W</span>
                    </div>
                    <h2 className='hidden sm:block text-sm font-semibold tracking-tight uppercase text-primary whitespace-nowrap'>Workforce Pro</h2>
                </Link>

                <span className='hidden sm:block w-[1px] h-5 bg-border shrink-0'></span>

                <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                    <h2 className='text-xs sm:text-base font-medium text-primary truncate'>
                        Hello, <span className='font-semibold text-primary'>{(userName === adminData?.name) ? userName.split(' ').slice(0, 2).join(' ') : userName.split(' ')[0]}</span> 👋
                    </h2>

                    {/* Role Pill */}
                    <span className={`text-[8px] sm:text-[11px] font-semibold px-1.5 sm:px-2.5 py-0.5 rounded-full border uppercase tracking-wider shrink-0 ${isAdmin
                        ? 'bg-accent/10 text-accent border-accent/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                        {roleLabel}
                    </span>
                </div>
            </div>

            {/* Right Section: Theme Toggle + Logout Button */}
            <div className='flex gap-1.5 sm:gap-3 items-center shrink-0'>
                <button
                    onClick={toggleTheme}
                    title='Toggle theme'
                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-card/50 cursor-pointer transition-all duration-200"
                >
                    <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'} text-xs sm:text-sm`}></i>
                </button>

                {confirmLogout ? (
                    <div className='absolute right-4 top-14 bg-card border border-border rounded-lg p-3 shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-top-1'>
                        <span className='text-xs text-secondary whitespace-nowrap'>{userName === adminData?.name ? `Sure, ${userName.split(' ')[1]}` : `Sure, ${userName.split(' ')[0]}`}?</span>
                        <Button onClick={() => setConfirmLogout(false)} variant='secondary' class_="text-xs px-2 py-1 whitespace-nowrap" title="Cancel Logout">Cancel</Button>
                        <Button onClick={handleLogout} variant='danger' class_="text-xs px-2 py-1 whitespace-nowrap" title="Confirm Logout">Log out</Button>
                    </div>
                ) : (
                    <Button variant="secondary" id="logout-btn" onClick={() => setConfirmLogout(true)} class_="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs font-semibold whitespace-nowrap" title="Logout">
                        Log out
                    </Button>
                )
                }
            </div>
        </header>
    )
}

export default Header