import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';

export default function Home() {
    return (
        <div className='w-screen p-2'>
            <div className='flex items-center border-b border-gray-300 pb-2'>
                <img src="https://play-lh.googleusercontent.com/gaZVK4KHlhoYfrZqwD9o0t_utTyMK9g4KlRqskfygJYNOVlViCWXN_1NLIv5GJkDygo" alt="logo" className='w-6 ml-8'/>
                <p className='ml-2'>UpNote</p>
            </div>
            <div>
                <Navbar />
            </div>
            <div className='w-screen flex'>
                <Sidebar />
                <div className='w-full'>outlet</div>
            </div>
        </div>
    );
}

