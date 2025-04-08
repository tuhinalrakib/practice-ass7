import React from 'react';

const BidSection = () => {
    return (
        <div className='sora w-[90%] mx-auto mt-32'>
            <h1 className='text-3xl text-[#0E2954]'>Active Actions</h1>
            <p className='text-[#000000] mt-6 mb-5'>Discover and bid on extraordinary items</p>
            <div className='flex gap-8 pb-8'>
                <div className='w-[70%]'>
                    <table className='bg-[#ffffff] rounded-3xl w-full'>
                        <thead>
                            <tr>
                                <th className='pr-[400px] pl-8 py-8'>Items</th>
                                <th className='pr-20 py-8'>Current Bid</th>
                                <th className='pr-20 py-8'>Time Left</th>
                                <th className='pr-8 py-8'>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='px-6 py-4 border-t border-gray-300'>Item 1</td>
                                <td className='px-6 py-4 border-t border-gray-300'>Item 2</td>
                                <td className='px-6 py-4 border-t border-gray-300'>Item 3</td>
                                <td className='px-6 py-4 border-t border-gray-300'>
                                    <button className='cursor-pointer'><img width={40} height={40} src="images/heart.png" alt="hhujh" /></button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className='bg-[#ffffff] w-[30%] rounded-3xl'>
                    <div className='flex gap-1 mt-8 items-center justify-center pb-4 border-b border-gray-300'>
                        <img width={40} height={40} src="images/heart.png" alt="hhujh" />
                        <h1 className='text-3xl text-[#0E2954] '>Favorite Items</h1>
                    </div>
                    <div className='text-center my-12'>
                        <h4>No favorites yet</h4>
                        <p>Click the heart icon on any item <br /> to add it to your favorites</p>
                    </div>
                    <div className='flex justify-around my-8'>
                        <h1 className='text-2xl'>Total bids Amount</h1>
                        <h1 className='text-2xl'>$0000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidSection;
