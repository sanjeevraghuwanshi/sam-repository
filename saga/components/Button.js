import React from 'react';

const Button = ({ type = 'button', onClick, children, className }) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;