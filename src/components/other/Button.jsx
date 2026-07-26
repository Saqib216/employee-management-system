import React from 'react'

// All button styles are defined HERE. change once, updates everywhere
const variants = {
    primary:  'bg-primary text-surface rounded-md cursor-pointer hover:opacity-85 transition-all duration-300 font-semibold active:translate-y-0 hover:-translate-y-[1px]',
    secondary: 'text-primary bg-transparent rounded-md cursor-pointer transition-all duration-300 border font-semibold border-border hover:border-border-hover hover:bg-card active:opacity-70',
    danger:   'px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-all duration-300 font-semibold active:scale-95',
    ghost:    'px-4 py-2 text-secondary border border-secondary rounded-lg cursor-pointer hover:border-primary hover:text-surface transition-all duration-300 font-semibold hover:bg-primary active:opacity-50',
}

const Button = ({ children, variant = 'primary', id, class_, onClick }) => {
    return (
        <button className={`${variants[variant]} ${class_} `} id={id} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
