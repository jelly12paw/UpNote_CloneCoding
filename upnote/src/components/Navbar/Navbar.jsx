import React from 'react';
import { AiOutlineMenu, AiOutlineRight, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { TbBoxMultiple } from "react-icons/tb";

export default function Navbar() {
    return (
        <nav className='w-screen p-4'>
            <div className='flex justify-between px-4'>
                <div className='text-2xl flex items-center'>
                    <AiOutlineMenu className='mr-6' />
                    <AiOutlineLeft className='mr-4' />
                    <AiOutlineRight className='mr-8' />
                    <IoMdRefresh className='mr-8'/>
                    <div className='h-10 w-80 border border-gray-300 rounded flex items-center'>
                        <button className='ml-2 text-2xl'><AiOutlineSearch /></button>
                        <input type="text" placeholder='  Search' className='text-xl' />
                    </div>
                </div>
                <div className='text-2xl flex items-center'>
                    <button className='bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded text-lg mr-8'>New Note</button>
                    <TbBoxMultiple className='mr-6' />
                    <AiOutlineSetting />
                </div>
            </div>
        </nav>
    );
}

