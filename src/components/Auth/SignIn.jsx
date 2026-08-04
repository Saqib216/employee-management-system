import React, { useState } from 'react'
import Button from '../other/Button';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';


const SignIn = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const { isDark, toggleTheme } = useTheme();

    const submitHandler = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all Fields');
            return;
        }
        setError('');

        const success = handleLogin(email, password);
        if (!success) {
            setError('Invalid email or password!');
        }

        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex flex-col gap-5 justify-center w-full min-h-svh items-center bg-surface px-4'>

            <header className='flex items-center gap-3 w-full fixed top-0 left-0 px-4 py-3 border-b border-border bg-surface/80 backdrop-blur-md justify-between z-50'>
                <Link to='/' className='flex items-center gap-3'>
                    <div className='w-11 h-11 flex items-center justify-center bg-card rounded-lg'>
                        <span className='text-accent font-bold text-lg'>W</span>
                    </div>
                    <h2 className='text-lg font-semibold tracking-tight uppercase text-primary'>Workforce Pro</h2>
                </Link>

                <button
                    onClick={toggleTheme}
                    title='Toggle theme'
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:text-primary cursor-pointer transition-all duration-200"
                >
                    <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'} text-sm`}></i>
                </button>
            </header>

            <div className='w-full max-w-100 flex flex-col gap-8'>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl sm:text-4xl font-semibold  tracking-tight'>Welcome back</h2>
                    <p className='text-sm text-secondary tracking-tight font-medium'>Let's get started, sign in to continue.</p>
                </div>

                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className='flex flex-col gap-5'>

                    <label className='text-[11px] font-semibold uppercase tracking-wider text-muted'>Email address</label>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                    }} className={`bg-card border border-border px-3.5 py-3 rounded-md placeholder:text-muted hover:border-muted focus:border-primary h-14 transition-all duration-150 ease-in-out focus:ring-4 text-base sm:text-sm focus:ring-focus-ring ${error ? 'border-danger' : 'border-border'}`} type="email" placeholder='name@company.com' />

                    <label className='text-[11px] font-semibold uppercase tracking-wider text-muted'>Password</label>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                    }} className={`bg-card border border-border px-3.5 py-3 rounded-md placeholder:text-muted hover:border-muted focus:border-primary h-14 transition-all duration-150 ease-in-out focus:ring-4 focus:ring-focus-ring text-base sm:text-sm ${error ? 'border-danger' : 'border-border'}'}`} type="password" placeholder='••••••••' />

                    {
                        error && (
                            <p className='text-danger text-xs font-medium -mt-1'>{error}</p>
                        )
                    }

                    <Button id="login-btn" class_="w-full mt-6 py-3 text-md" variant="primary">Continue</Button>
                </form>

                {/* Demo Credentials Hint */}
                <div className='flex flex-col gap-1 text-[11px] text-muted text-center -mt-2'>
                    <p><span className='font-semibold text-secondary'>Admin:</span> admin@ems.com · Admin@123</p>
                    <p><span className='font-semibold text-secondary'>Employee:</span> ali.raza@ems.com · Ali@1234</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn