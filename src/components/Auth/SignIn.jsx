import React, { useState } from 'react'
import Button from '../other/Button';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';


const SignIn = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const {isDark, toggleTheme} = useTheme();

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
        <div className='flex flex-col gap-5 justify-center w-screen h-screen items-center bg-surface px-4'>

            <header className='flex cursor-pointer items-center gap-3 w-screen fixed top-0 px-3 py-3 border-b border-b-border outline-none justify-between'>
                <Link to='/' className='flex items-center gap-3'>
                    <div className='w-11 h-11 flex items-center justify-center bg-card rounded-lg'>
                        <span className='text-accent font-bold text-lg'>W</span>
                    </div>
                    <h2 className='text-lg font-semibold tracking-wide uppercase text-primary'>Workforce Pro</h2>
                </Link>

                <button
                    onClick={toggleTheme}
                    title='Toggle theme'
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:text-primary cursor-pointer transition-all duration-200"
                >
                    <i className={`fa-solid ${isDark? 'fa-moon' : 'fa-sun'} text-sm`}></i>
                </button>
            </header>

            <div className='w-full max-w-100 flex flex-col gap-8'>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold  tracking-tight'>Welcome back</h2>
                    <p className='text-sm text-secondary tracking-tight font-medium'>Let's get started, sign in to continue.</p>
                </div>

                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className='flex flex-col gap-5'>

                    <label className='text-[11px] font-semibold uppercase tracking-wider text-muted'>Email address</label>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                    }} className={`bg-card border border-border px-3.5 py-3 rounded-md placeholder:text-muted hover:border-muted focus:border-primary h-14 transition-all duration-150 ease-in-out focus:ring-4 focus:ring-[#3d3d3d] ${error ? 'border-danger' : 'border-border'}`} type="email" placeholder='name@company.com' />

                    <label className='text-[11px] font-semibold uppercase tracking-wider text-muted'>Password</label>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                    }} className={`bg-card border border-border px-3.5 py-3 rounded-md placeholder:text-muted hover:border-muted focus:border-primary h-14 transition-all duration-150 ease-in-out focus:ring-4 focus:ring-[#3d3d3d] ${error ? 'border-danger' : 'border-border'}'}`} type="password" placeholder='••••••••' />

                    {
                        error && (
                            <p className='text-danger text-xs font-medium -mt-1'>{error}</p>
                        )
                    }

                    <Button id="login-btn" class_="w-full mt-6 py-3 text-md" variant="primary">Continue</Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn