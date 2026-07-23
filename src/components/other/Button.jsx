import React from 'react'

// All button styles are defined HERE. change once, updates everywhere
const variants = {
    primary:  'px-4 py-2 bg-accent text-white rounded-lg cursor-pointer hover:opacity-90 transition-all duration-300 font-semibold active:scale-95',
    secondary: 'px-4 py-2 text-surface bg-primary rounded-lg cursor-pointer hover:bg-accent hover:text-primary transition-all duration-300 font-semibold active:bg-[#22375a]',
    danger:   'px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-all duration-300 font-semibold active:scale-95',
    ghost:    'px-4 py-2 text-secondary border border-secondary rounded-lg cursor-pointer hover:border-primary hover:text-surface transition-all duration-300 font-semibold hover:bg-primary active:opacity-50',
}

const Button = ({ children, variant = 'primary', id, class_, onClick }) => {
    return (
        <button className={`${class_} ${variants[variant]}`} id={id} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
