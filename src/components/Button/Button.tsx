import './Button.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

function Button ({ children, ...buttonProps }: ButtonProps) {
    return (
    <button className='button'
    { ...buttonProps } >
        {children}
    </button>
    )
}

export default Button
