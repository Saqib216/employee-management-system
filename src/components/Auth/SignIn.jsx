import React, { useState } from 'react'
import Button from '../other/Button';


const SignIn = ({ handleLogin }) => {
    // console.log(handleLogin);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

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
        <div className='flex flex-col gap-5 justify-center w-screen h-screen items-center bg-surface'>
            <div className='w-full max-w-100 flex flex-col gap-8'>

                {/* branding logo */}
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-11 h-11 flex items-center justify-center bg-primary rounded-full'>
                        <span className='text-surface font-bold text-lg'>W</span>
                    </div>
                    <h2 className='text-sm font-semibold tracking-tight text-primary'>Workforce Pro</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold uppercase tracking-wide'>Welcome</h2>
                    <p className='text-sm text-secondary pl-1 tracking-wide font-medium uppercase'>Let's Get Started!</p>
                </div>

                <form onSubmit={(e) => {
                    submitHandler(e);
                }} className='flex flex-col gap-4'>
                    <p className=''>Enter your email</p>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                    }} className={`border border-accent p-3 rounded-lg placeholder:text-secondary focus-within:border-2 outline-none h-14 transition-all duration-100 ease-in-out ${error ? 'border-red-500' : 'border-accent'}`} type="email" placeholder='Email' />

                    <p className='mt-4'>Enter password</p>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                    }} className={`border border-accent p-3 rounded-lg placeholder:text-secondary focus-within:border-2 outline-none h-14 transition-all duration-150 ease-in-out ${error ? 'border-red-500' : 'border-accent'}`} type="password" placeholder='Password' />

                    {
                        error && (
                            <p className='text-red-400 text-sm transition-all duration-130 ease-in-out'>⚠️ {error}</p>
                        )
                    }

                    <Button id="login-btn" class_="mt-6 py-2 text-lg" variant="primary">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn