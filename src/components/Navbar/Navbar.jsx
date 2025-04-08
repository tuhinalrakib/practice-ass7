import React from 'react';
// import Button from '../Button/Button';
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="poppins w-full bg-base-100 shadow-sm">
            <div className="navbar px-[10%]">
                <div className="navbar-start">
                    <img src="images/AuctionGallery.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        <li><a className='text-xl'>Home</a></li>
                        <li><a className='text-xl'>Action</a></li>
                        <li><a className='text-xl'>Categories</a></li>
                        <li><a className='text-xl'>How to Works</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                  <div class="avatar indicator">
                    <a class="indicator tab tab-active">
                      <span class="indicator-item badge">8</span>
                    </a>
                  </div>
                  <IoIosNotificationsOutline size={35} className='bg-gray-300 rounded-2xl mr-5' />
                  <img width={35} height={35} className='rounded-full' src="https://i.ibb.co.com/G4Vkh6TX/rsz-11623851069103.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
