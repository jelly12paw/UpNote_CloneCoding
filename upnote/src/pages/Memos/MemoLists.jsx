import React from 'react';
import Editor from '../../api/Lexical/Editor';

export default function MemoLists() {
    return (
        <div className='w-screen flex items-center'>
            <div className='w-[20rem]'>list</div>
            <div className='w-full bg-[#eee]'><Editor /></div>
        </div>
    );
}

