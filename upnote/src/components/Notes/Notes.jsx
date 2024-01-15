import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

export default function Notes() {
    const [notebooks, setNotebooks] = useState(() => {
        const data = localStorage.getItem('combined');
        return data ? JSON.parse(data) : [];
    });

    const handleDelete = (id, e) => {
        e.preventDefault();
        const listsnote = localStorage.getItem('listsnote');
        const sidenote = localStorage.getItem('sidenote');
        const note1 = listsnote ? JSON.parse(listsnote) : [];
        const note2 = sidenote ? JSON.parse(sidenote): [];
        const updateLists = note1.filter(item => item.id !== id);
        const updateSide = note2.filter(item => item.id !== id);
        localStorage.setItem('listsnote', JSON.stringify(updateLists));
        localStorage.setItem('sidenote', JSON.stringify(updateSide));
        
        const updatedNotebooks = notebooks.filter(item => item.id !== id);
        localStorage.setItem('combined', JSON.stringify(updatedNotebooks));
        
        setNotebooks(updatedNotebooks);
    };

    return (
        <div to='/memo' className='grid grid-cols-7 p-6'>
            {notebooks.map((item) => (
                <Link to='/memos' key={item.id} className='w-[9rem] h-[12rem] rounded bg-stone-200 mb-8 mr-8 group'>
                    <button onClick={(e) => handleDelete(item.id, e)} className='absolute w-[2.5rem] h-[2.5rem] bg-[rgb(0,0,0,0.1)] hover:bg-[rgb(0,0,0,0.2)] rounded-full text-stone-100 text-xl m-2 ml-[6rem] opacity-0 group-hover:opacity-100'><FaTrashAlt className='ml-[0.6rem] rotate-12' /></button>
                    <p className='w-[9rem] h-[2.5rem] rounded-b bg-stone-400 mt-[9.5rem] p-2 font-semibold text-white'>{item.title}</p>
                </Link>
            ))}
        </div>
    );
}

