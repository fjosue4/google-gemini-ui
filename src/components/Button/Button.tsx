import './Button.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    disabled?: boolean
}

function Button ({ children, disabled, ...buttonProps }: ButtonProps) {
    return (
    <button className={`button ${disabled ? 'disabled' : ''}`}
    { ...buttonProps } >
        {children}
    </button>
    )
}

export default Button
