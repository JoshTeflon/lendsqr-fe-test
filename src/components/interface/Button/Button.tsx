import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import LoadingDots from '../LoadingDots/LoadingDots'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: 'primary' | 'outlined' | 'naked' | 'link'
    type?: 'submit' | 'reset' | 'button'
    loading?: boolean
    disabled?: boolean | any
    size?: 'base' | 'lg'
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, variant = 'primary', type = 'button', loading, disabled, size = 'base', ...rest } = props

    const buttonStyles = `${variant} ${variant !== 'naked' && variant !== 'link' ? size : ''}`

    return (
        <button
            className={classnames(className, buttonStyles)}
            type={type}
            disabled={loading || disabled}
            {...rest}
        >
            {loading ? <LoadingDots /> : children}
        </button>
    )
}

export default Button;