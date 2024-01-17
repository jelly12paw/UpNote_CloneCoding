import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function MemoMenu() {
    const noteTitle = JSON.parse(localStorage.getItem('notetitle'));
    const [memos, setMemos] = useState(() => {
        const data = localStorage.getItem(noteTitle);
        return data ? JSON.parse(data) : [];
    });
    
    // const LocalNoteData = JSON.parse(localStorage.getItem(noteTitle));
    // memos.map((item) => item.data.root.children[1] ? item.data.root.children[1].children[0] ? console.log(item.data.root.children[1].children[0].text) : '' : '');
    return (
        <div className='w-full h-full p-4 overflow-y-auto'>
            {memos.map((item) => (
                <div key={item.id} className='w-full flex items-center justify-between p-4 border-b-2 border-gray-200'>
                    <div>
                        {item.data.root.children[0].children[0] ? 
                            <p className='font-bold text-xl mb-2'>{item.data.root.children[0].children[0].text}</p> : <p className='font-bold text-xl mb-2'>New Note</p>
                        }
                        {item.data.root.children[1] ? item.data.root.children[1].children[0] ?
                            <p className='text-2xl text-gray-500 mb-2'>{item.data.root.children[1].children[0].text}</p> : <p className='text-2xl text-gray-400 mb-1'>No additional text</p> : <p className='text-2xl text-gray-400 mb-1'>No additional text</p>
                        }
                        <p className='text-gray-300'>{item.createdAt}</p>
                    </div>
                    <div className='mr-10'>
                        <button><FaTrashAlt /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

