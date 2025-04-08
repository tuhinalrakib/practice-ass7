import React from 'react';

const Button = ({children, bgColor,textColor,onClick}) => {
    return <button className='rounded-3xl cursor-pointer py-4 px-5 text-xl font-semibold' onClick={onClick} style={{
        backgroundColor : bgColor,
        color : textColor
    }}>{children}</button>
};

export default Button;