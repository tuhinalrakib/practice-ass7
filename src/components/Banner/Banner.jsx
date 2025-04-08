import React from 'react';
import Button from '../Button/Button';

const Banner = () => {
    
    return (
        <div className="bg-[url(images/Banner-min.jpg)] bg-cover flex gap-5 justify-between items-center pb-48">
            <div className='ml-36'>
                <h1 className='text-5xl font-semibold text-white mt-52 mb-5'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='text-2xl text-[#ffffff] mb-8'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <Button bgColor='#ffffff' textColor="#010000">Explore More</Button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;