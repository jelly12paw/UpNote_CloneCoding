import React from 'react';
import Editor from '../../api/Lexical/Editor';

export default function MemoLists() {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='w-[35%]'>list</div>
            <div className='w-[65%] bg-[#eee]'><Editor /></div>
        </div>
    );
}

