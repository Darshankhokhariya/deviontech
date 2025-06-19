import { ButtonProps } from '@/interfaces/main'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ className, text, type, disabled }) => {
    return (
        <button className={className} type={type} disabled={disabled}>{text}</button>
    )
}

export default Button