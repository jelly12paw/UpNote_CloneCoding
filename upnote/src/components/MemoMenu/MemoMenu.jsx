import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function MemoMenu() {
    const noteTitle = JSON.parse(localStorage.getItem('notetitle'));
    const [memos, setMemos] = useState(() => {
        const data = localStorage.getItem(noteTitle);
        return data ? JSON.parse(data) : [];
    });

    const handleDelete = (id) => {
        const deletedMemos = memos.filter(item => item.id !== id);
        localStorage.setItem(noteTitle, JSON.stringify(deletedMemos));
        setMemos(deletedMemos);
        window.location.reload();
    };
    
    const [clicked, setClicked] = useState(false);
    const [details, setDetails] = useState();

    const handleClick = (id) => {
        setClicked(prev => !prev);
        setDetails(memos.filter(item => item.id === id));
    };
    
    return (
        <div className='w-full h-full p-4 overflow-y-auto'>
            {memos.map((item) => (
                <div key={item.id} className='w-full flex items-center justify-between p-4 border-b-2 border-gray-200 cursor-pointer hover:bg-blue-100'>
                    <div className='w-[80%] overflow-hidden whitespace-no-wrap overflow-ellipsis' onClick={() => handleClick(item.id)}>
                        {item.data.root.children[0].children[0] ? 
                            <p className='font-bold text-xl mb-2'>{item.data.root.children[0].children[0].text}</p> : <p className='font-bold text-xl mb-2'>New Note</p>
                        }
                        {item.data.root.children[1] ? item.data.root.children[1].children[0] ?
                            <p className='text-2xl text-gray-500 mb-2'>{item.data.root.children[1].children[0].text}</p> : <p className='text-2xl text-gray-400 mb-1'>No additional text</p> : <p className='text-2xl text-gray-400 mb-1'>No additional text</p>
                        }
                        <p className='text-gray-300'>{item.createdAt}</p>
                    </div>
                    <div className='mr-10'>
                        <button onClick={() => handleDelete(item.id)} className='text-2xl text-gray-400 hover:text-gray-500 hover:text-3xl'><FaTrashAlt /></button>
                    </div>
                </div>
            ))}
            {clicked ? 
                <div className='absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.3)]'>
                    <div className='absolute top-[15%] left-[23%] bg-white w-[60vw] h-[70vh] rounded p-6' onClick={() => setClicked(false)}>
                        {details.map((item) => (item.data.root.children ? item.data.root.children.map((array) => array.children.map((text) => 
                            <p className='text-2xl pb-2'>{text.text}</p>
                        )) : ''))}
                    </div>
                </div> 
            : ''}
        </div>
    );
}

