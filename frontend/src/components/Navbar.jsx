import React, { useState } from 'react';import avatarImg from '../assets/avatar.png';
import { Link } from 'react-router-dom';import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext';
export const Navbar = () => {
  const [IsDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Orders", href: "/orders"},
    {name: "Cart Page", href: "/cart"},
    {name: "CheckOut", href: "/checkout"}
  ];
  const {currentUser, logout} = useAuth();
console.log('Navbar currentUser:', currentUser);
  const handleLogout = () => {
    logout();
  }
  const cartItems = useSelector(state=> state.cart.cartItems)
  return (
    <header className='max-w-screen-2xl px-4 mx-auto lg:px-24 py-6'>
        <nav className='flex gap-4 justify-between items-center'>
        <div className='flex items-center gap-4 md:gap-16'>
            <Link to="/">
            <HiOutlineBars3CenterLeft  className='size-6'/>
            </Link>
        <div className='relative w-40 sm:w-72 space-x-2'>
            <IoSearchOutline className='absolute inline-block sm:left-4  left-3 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-blackBG w-full md:px-8 px-6 py-1 rounded-md focus:outline-none'/>
        </div>
        </div>
            <div className='relative flex items-center space-x-2'>
              <div>
                {
                  currentUser ?
                   <><button onClick={ () => setIsDropdownOpen(!IsDropdownOpen) }><img src={avatarImg || currentUser.photo} alt="avatar" className='size-6 rounded-full ring-2 ring-blue-500 mt-2'/></button>
                   {
                   IsDropdownOpen && (
                    <div className='absolute rounded-md  mt-2  bg-white w-44 shadow-lg'>
                      <ul>
                     { navigation.map((item) => (
                      <li key={item.name} className='block text-md py-2 px-4 hover:bg-gray-200'>
                        <Link to={item.href}>{item.name}</Link>
                      </li>
                     )) }
                     <li>
                      <button className='block py-2 px-4 w-full text-left  hover:bg-gray-200' onClick={handleLogout}>Logout</button>
                     </li>
                      </ul>
                    </div>
                   )
                  }
                  </>
                   : <Link to="/login"><HiOutlineUser className='size-6' /></Link> 
                }
              </div>
            <button className='hidden sm:block'> 
            <HiOutlineHeart className='size-6' />
            </button>
            <Link to="/cart" className='bg-primary flex items-center px-4 py-1 rounded-md space-x-2'>
            <HiOutlineShoppingCart className='size-5 text-white' />
            {cartItems.length > 0 ?
              <span className='text-white font-semibold ml-1 text-lg'>{cartItems.length}</span> : 
                <span className='text-white font-semibold ml-1 text-lg'>0</span>
            }
            </Link>
        </div>
        </nav>
    </header>
  )
}
