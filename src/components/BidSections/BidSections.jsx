import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

const BidSections = ({notify}) => {
    const [bidItems, setBidItems] = useState([])
    const [favourites,setFavourites] = useState([])
    const [totalBidAmount,setTotalBidAmount] = useState(0)

    useEffect(()=>{
        fetch('biditems.json')
        .then(res=>res.json())
        .then(data=>setBidItems(data.items))
    },[])

    const handleFavourites = (item)=>{
        if(!favourites.includes(item)){
            setFavourites([...favourites, item])
            setTotalBidAmount((prevAmount)=> prevAmount + item.currentBidPrice)
        }
    }

    console.log(favourites)

    return (
        <div className='sora w-[90%] mx-auto mt-32 mb-12'>
            <h1 className='text-3xl text-[#0E2954]'>Active Actions</h1>
            <p className='text-[#000000] mt-6 mb-5'>Discover and bid on extraordinary items</p>
            <div className='flex gap-8 pb-8'>
                <div className='w-[70%]'>
                    <table className='bg-[#ffffff] rounded-3xl w-full'>
                        <thead>
                            <tr>
                                <th className='pr-[450px] pl-8 py-8'>Items</th>
                                <th className='pr-16 py-8'>Current Bid</th>
                                <th className='pr-16 py-8'>Time Left</th>
                                <th className='pr-8 py-8'>Bid Now</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                bidItems.map(item=> <Item key={item.id} notify={notify} handleFavourites={handleFavourites} item={item}/>)
                            }
                        </tbody>
                            
                            {/*  */}
                            
                    </table>
                </div>
                <div className='bg-[#ffffff] w-[30%] rounded-3xl'>
                    <div className='flex gap-1 mt-8 items-center justify-center pb-4 border-b border-gray-300'>
                        <img width={40} height={40} src="images/heart.png" alt="hhujh" />
                        <h1 className='text-3xl text-[#0E2954] '>Favorite Items</h1>
                    </div>
                    {
                        favourites.length === 0 ? (
                            <div className='text-center my-12'>
                                <h4>No favorites yet</h4>
                                <p>Click the heart icon on any item <br /> to add it to your favorites</p>
                            </div>
                        ):(
                            <div className="text-center my-12">
                                {favourites.map(fav=> <Cart key={fav.id} fav={fav}></Cart>)}
                            </div>
                        )
                    }
                    <div className='flex justify-around my-8'>
                        <h1 className='text-2xl'>Total bids Amount</h1>
                        <h1 className='text-2xl'>${totalBidAmount}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidSections;


// 
// import React, { useEffect, useState } from 'react';
// import Item from '../Item/Item';

// const BidSections = () => {
//     const [bidItems, setBidItems] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [totalBidAmount, setTotalBidAmount] = useState(0);

//     // Fetch bid items
//     useEffect(() => {
//         fetch('biditems.json')
//             .then((res) => res.json())
//             .then((data) => setBidItems(data.items));
//     }, []);

//     // Handle adding an item to favorites
//     const handleAddToFavorites = (item) => {
//         if (!favorites.includes(item)) {
//             setFavorites([...favorites, item]);
//             setTotalBidAmount((prevAmount) => prevAmount + item.currentBidPrice);
//         }
//     };

//     return (
//         <div className="sora w-[90%] mx-auto mt-32">
//             <h1 className="text-3xl text-[#0E2954]">Active Actions</h1>
//             <p className="text-[#000000] mt-6 mb-5">Discover and bid on extraordinary items</p>
//             <div className="flex gap-8 pb-8">
//                 <div className="w-[70%]">
//                     <table className="bg-[#ffffff] rounded-3xl w-full">
//                         <thead>
//                             <tr>
//                                 <th className="pr-[450px] pl-8 py-8">Items</th>
//                                 <th className="pr-16 py-8">Current Bid</th>
//                                 <th className="pr-16 py-8">Time Left</th>
//                                 <th className="pr-8 py-8">Bid Now</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bidItems.map((item) => (
//                                 <Item
//                                     key={item.id}
//                                     item={item}
//                                     handleAddToFavorites={handleAddToFavorites}
//                                 />
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="bg-[#ffffff] w-[30%] rounded-3xl">
//                     <div className="flex gap-1 mt-8 items-center justify-center pb-4 border-b border-gray-300">
//                         <img width={40} height={40} src="images/heart.png" alt="heart" />
//                         <h1 className="text-3xl text-[#0E2954] ">Favorite Items</h1>
//                     </div>

//                     {/* Conditionally render favorites section */}
//                     {favorites.length === 0 ? (
//                         <div className="text-center my-12">
//                             <h4>No favorites yet</h4>
//                             <p>Click the heart icon on any item <br /> to add it to your favorites</p>
//                         </div>
//                     ) : (
//                         <div className="text-center my-12">
//                             <h4>{favorites.length} Favorites</h4>
//                             <p>Click on the heart icon to add more items</p>
//                         </div>
//                     )}

//                     <div className="flex justify-around my-8">
//                         <h1 className="text-2xl">Total bids Amount</h1>
//                         <h1 className="text-2xl">${totalBidAmount}</h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BidSections;
  
// 