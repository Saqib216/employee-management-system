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
        if(!success){
            setError('Invalid email or password!');
        }

        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex flex-col gap-5 justify-center w-screen h-screen items-center'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl tracking-wider'>Welcome</h2>
                    <p className='text-sm text-secondary pl-1 tracking-wide'>Let's Get Started!</p>
                </div>
                <div id="form-box" className='border-2 border-[#2D2D2D] rounded-xl p-5 bg-card h-96 w-96'>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }} className='flex flex-col gap-4'>
                        <p className=''>Enter your email</p>

                        <input value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }} className={`border border-accent p-3 rounded-lg placeholder:text-secondary focus-within:border-2 outline-none h-14 transition-all duration-100 ease-in-out ${error? 'border-red-500' : 'border-accent'}`} type="email" placeholder='Email' />

                        <p className='mt-4'>Enter password</p>
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            setError('');
                        }} className={`border border-accent p-3 rounded-lg placeholder:text-secondary focus-within:border-2 outline-none h-14 transition-all duration-150 ease-in-out ${error? 'border-red-500' : 'border-accent'}`} type="password" placeholder='Password' />

                        {
                            error && (
                                <p className='text-red-400 text-sm transition-all duration-130 ease'>⚠️ {error}</p>
                            )
                        }

                        <Button id="login-btn" class_="mt-6" variant="ghost">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn