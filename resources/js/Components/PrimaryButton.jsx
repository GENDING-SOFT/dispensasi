import React from 'react';
export function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `flex w-full justify-center rounded-md bg-blue-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}



export default function Button({ children, className, onClick, type }) {
    return (
        <button type={type} onClick={onClick} className={`font-medium rounded-lg text-sm px-4 py-2 focus:outline-none ${className}`}>
            {children}
        </button>
    );
}



