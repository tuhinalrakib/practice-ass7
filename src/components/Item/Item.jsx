import React, { useState } from 'react';
import './Item.css'


const Item = ({item, handleFavourites, notify}) => {
    const [isDisabled,setIsDisabled] = useState(false)
    const {image, title, currentBidPrice, timeLeft} = item

    const handleClick = ()=>{
        notify()
        handleFavourites(item)
        setIsDisabled(true)
    }

    return (
        <>
            <tr>
                <td className='flex gap-2 items-center pl-4 py-4 border-t border-gray-300'><img className='img' src={image} alt="" /> {title}</td>
                <td className='px-6 py-4 border-t border-gray-300'>{currentBidPrice}$</td>
                <td className='px-6 py-4 border-t border-gray-300'>{timeLeft}</td>
                <td className='px-6 py-4 border-t border-gray-300'>
                    <button onClick={handleClick} disabled={isDisabled} className='cursor-pointer'><img width={40} height={40} src="images/heart.png" alt="hhujh" /></button>
                </td>
                
            </tr>
        </>
    );
};

export default Item;

// import React from 'react';
// import './Item.css';
// import { ToastContainer, toast } from 'react-toastify';

// const Item = ({ item, handleAddToFavorites }) => {
//     const { image, title, currentBidPrice, timeLeft } = item;

//     const handleClick = () => {
//         toast('Wow so easy!');
//         handleAddToFavorites(item); // Add item to favorites when clicked
//     };

//     return (
//         <>
//             <tr>
//                 <td className="flex gap-2 items-center pl-4 py-4 border-t border-gray-300">
//                     <img className="img" src={image} alt="" /> {title}
//                 </td>
//                 <td className="px-6 py-4 border-t border-gray-300">{currentBidPrice}$</td>
//                 <td className="px-6 py-4 border-t border-gray-300">{timeLeft}</td>
//                 <td className="px-6 py-4 border-t border-gray-300">
//                     <button onClick={handleClick} className="cursor-pointer">
//                         <img width={40} height={40} src="images/heart.png" alt="heart icon" />
//                     </button>
//                 </td>
//                 <ToastContainer />
//             </tr>
//         </>
//     );
// };

// export default Item;
