import React, { useEffect, useState } from 'react';

export default function Notes() {
    const [notebooks, setNotebooks] = useState([]);
    
    useEffect(() => {
        const listsnote = localStorage.getItem('listsnote');
        const sidenote = localStorage.getItem('sidenote');
    
        const note1 = listsnote ? JSON.parse(listsnote) : [];
        const note2 = sidenote ? JSON.parse(sidenote): [];
    
        setNotebooks([...note1, ...note2].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    }, []);
    
    return (
        <div className='grid grid-cols-7 p-6'>
            {notebooks.map((item) => (
                <div key={item.id} className='w-[9rem] h-[12rem] rounded bg-stone-200 mb-8 mr-8'>
                    <p className='w-[9rem] h-[2.5rem] rounded-b bg-stone-400 mt-[9.5rem] p-2 font-semibold text-white'>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

