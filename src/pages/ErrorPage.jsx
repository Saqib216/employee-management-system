import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-8xl font-bold text-accent'>404</h1>
        <p className='text-secondary text-xl'>Page Not Found</p>
        <button onClick={() => navigate('/')} className='mt-4 bg-accent text-white px-6 py-2 rounded-lg cursor-pointer hover:opacity-80 transition-opacity'>
            Go to Login
        </button>
    </div>
  )
}

export default ErrorPage
