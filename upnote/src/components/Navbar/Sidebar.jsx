import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import CreateNoteBtn from '../Buttons/CreateNoteBtn';

export default function Sidebar() {
    return (
        <nav className='w-1/4'>
            <li className='list-none text-lg py-[0.65rem] border border-white hover:bg-gray-100 hover:border-gray-100 cursor-pointer flex items-center mb-6'><AiOutlineRight className='text-gray-400 font-bold mr-2' /><HiOutlineClipboardDocumentList className='mr-2' />All Notes</li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex items-center'><AiOutlineRight className='text-gray-400 font-bold mr-2' />QUICK ACCESS</li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex'>
                <Link to='/lists' className='flex items-center mr-14'><AiOutlineRight className='text-gray-400 font-bold mr-2' />NOTEBOOKS</Link>
                <CreateNoteBtn className='ml-14 mr-2 mt-1' btnLocation='sidenote' />
            </li>
            <li className='list-none my-6 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer flex items-center'><AiOutlineRight className='text-gray-400 font-bold mr-2' />TAGS</li>
            <li className='list-none my-6 ml-7 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer'>TEMPLATES</li>
            <li className='list-none my-6 ml-7 text-lg font-semibold text-blue-700 hover:text-blue-800 cursor-pointer'>TRASH</li>
        </nav>
    );
}

