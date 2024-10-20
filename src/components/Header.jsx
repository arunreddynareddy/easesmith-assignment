import React from 'react'
import logo from "../assets/logo.jpg";
import searchPlant from "../assets/search-plant.jpg";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";


function Header() {
  return (
    <header className='flex w-full flex-row justify-between items-center bg-white px-5 py-2'>
        <div className='flex flex-row items-center'>
            <img src={logo} alt="logo" className='w-12 h-12' />
            <h3 className="text-2xl font-semibold text-lime-800 ml-3">Chaperone</h3>
        </div>
        <div className='flex flex-row items-center border-b-2 border-neutral-700 py-2'>
            <CiSearch size={24} />
            <input type='search' placeholder='Search Plant' className='placeholder-zinc-600 ml-3 outline-0' />
            <img src={searchPlant} alt="search-plant" className='w-7 h-7' />
        </div>
        <div className='flex flex-row items-center'>
            <div  className='flex flex-col items-center'>
                <AiOutlineUser size={24} className='mb-1' />
                <p className='text-sm font-medium text-black'>My Profile</p>
            </div>
            <div  className='flex flex-col items-center ml-3'>
                <LiaShoppingCartSolid size={30} />
                <p className='text-sm font-medium text-black'>Cart</p>
            </div>
        </div>
    </header>
  )
}

export default Header
