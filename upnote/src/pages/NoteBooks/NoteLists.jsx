import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineAppstore, AiOutlineSearch } from "react-icons/ai";
import CreateNoteBtn from '../../components/Buttons/CreateNoteBtn';

export default function NoteLists() {
    const [btnStates, setBtnStates] = useState('apps');
    const handleClick = (btn) => setBtnStates(btn);
    
    return (
        <div className='w-screen'>
            <div className='border border-gray-200 bg-gray-100 w-full flex justify-between items-center py-1 text-lg'>
                <p className='ml-8'>Notebooks <span className='text-gray-400'>( 2 )</span></p>
                <div className='flex items-center'>
                    <div className='border border-gray-200 bg-white flex items-center text-xl rounded'>
                        <button onClick={() => handleClick('apps')} 
                            className={btnStates === 'apps' ? 'py-2 px-3 border-r border-gray-200 bg-gray-500 text-white rounded-l' : 'py-2 px-3 border-r'}><AiOutlineAppstore /></button>
                        <button onClick={() => handleClick('lists')} 
                            className={btnStates === 'lists' ? 'py-2 px-3 bg-gray-500 text-white rounded-r' : 'py-2 px-3'}><AiOutlineMenu /></button>
                    </div>
                    <div className='h-10 w-80 border border-gray-300 rounded flex items-center bg-white mx-8'>
                        <button className='ml-2 text-2xl'><AiOutlineSearch /></button>
                        <input type="text" placeholder='  Search' className='text-xl' />
                    </div>
                    <div className='mr-8 text-xl mt-1'><CreateNoteBtn btnLocation='listsnote' /></div>
                </div>
            </div>
            <div>
                notebooks
            </div>
        </div>
    );
}

