import React from 'react';

import Button from "./Button";
const ButtonInline = ({ type = 'button', children, onClick, className = 'button-inline' }) => {
    return (
        <Button
            onClick={onClick}
            className={className}
            type={type}
        >
            {children}
        </Button>
    );
}

export default ButtonInline;