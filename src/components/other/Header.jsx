import React from 'react'
import Button from './Button';

const Header = () => {
    return (
        <div>
            <div className='py-8 flex justify-between'>
                <h2 className='text-2xl'>Hello, <span className='tracking-wide font-semibold'>Saqib👋</span></h2>
                <Button variant="secondary" id="logout-btn">
                    Log out
                </Button>
            </div>
        </div>
    )
}

export default Header
