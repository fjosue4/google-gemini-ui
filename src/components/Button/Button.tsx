import './Button.scss'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
}

function Button ({ children }: ButtonProps) {
    return (
    <button className='button'>
        {children}
    </button>
    )
}

export default Button
