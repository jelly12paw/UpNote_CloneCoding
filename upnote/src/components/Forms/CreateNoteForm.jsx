import React, { useState } from 'react';

export default function CreateNoteForm({ handleOpen }) {
    const [title, setTitle] = useState('');
    const handleChange = (e) => setTitle(e.target.value); 
    
    return (
        <div className='w-full h-full bg-[rgb(0,0,0,0.5)] absolute left-0 top-0'>
            <div className='absolute left-[30%] top-[30%] w-[40rem] bg-white rounded py-6 px-6'>
                <div className='border-b border-gray-200'>
                    <p className='font-semibold text-2xl text-center mb-4'>Create New Notebook</p>
                    <div className='flex items-center py-6'>
                        <p className='font-semibold mr-12'>Name</p>
                        <input type="text" placeholder='Enter notebook name' className='bg-gray-100 rounded py-2 px-2 w-full'
                                value={title} onChange={handleChange}/>
                    </div>
                </div>
                <div className='pt-5 flex flex-row-reverse'>
                    <button className='border border-gray-200 py-2 px-6 rounded text-gray-400' onClick={handleOpen}>Create</button>
                </div>
            </div>
        </div>
    );
}

