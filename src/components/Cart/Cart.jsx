import React from 'react';

const Cart = ({fav}) => {
    const {image, title} = fav
    return (
        <div className='p-4 m-2 rounded-2xl bg-gray-200 flex gap-4 items-center'>
            <img className='img' src={image} />
            <h1>{title}</h1>
        </div>
    );
};

export default Cart;