import React from 'react';
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function Sidebar() {
    return (
        <nav className='w-1/4'>
            <li className='list-none text-lg py-2 hover:bg-gray-100 cursor-pointer flex items-center mb-6'><AiOutlineRight className='text-gray-400 font-bold mr-2' /><HiOutlineClipboardDocumentList className='mr-2' />All Notes</li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex items-center'><AiOutlineRight className='text-gray-400 font-bold mr-2' />QUICK ACCESS</li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex'>
                <p className='flex items-center'><AiOutlineRight className='text-gray-400 font-bold mr-2' />NOTEBOOKS</p>
                <button className='ml-14 mr-2'><AiOutlinePlus /></button>
            </li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex items-center'><AiOutlineRight className='text-gray-400 font-bold mr-2' />TAGS</li>
            <li className='list-none my-6 ml-7 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer'>TEMPLATES</li>
            <li className='list-none my-6 ml-7 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer'>TRASH</li>
        </nav>
    );
}

