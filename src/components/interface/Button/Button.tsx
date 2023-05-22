import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import LoadingDots from '../LoadingDots/LoadingDots'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: 'primary' | 'tertiary' | 'outline' | 'naked' | 'link'
    type?: 'submit' | 'reset' | 'button'
    loading?: boolean
    disabled?: boolean | any
    size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, variant = 'primary', type = 'button', loading, disabled, size = 'lg', ...rest } = props

    return (
        <button
            // className={classnames(
            //     className, 'w-full p-2 font-medium rounded-md hover:opacity-90 focus:outline-none focus:opacity-80 active:-translate-y-0.5 outline-none transition-all',
            //     {'bg-ch-primary text-white': variant === 'primary'},
            //     {'bg-ch-tertiary text-white py-2.5 px-2': variant === 'tertiary'},
            //     {'bg-transparent border border-current py-[9px] px-[7px]': variant === 'outline'},
            //     {'!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0': variant === 'naked'},
            //     {'!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0 underline': variant === 'link'},
            //     {'opacity-70 hover:opacity-70 active:translate-y-0 cursor-not-allowed': disabled},
            //     {'text-base md:text-lg': size === 'lg'},
            //     {'text-sm md:text-base': size === 'md'},
            //     {'text-sm': size === 'sm'}
            // )}
            type={type}
            disabled={loading || disabled}
            {...rest}
        >
            {loading ? <LoadingDots /> : children}
        </button>
    )
}

export default Button;