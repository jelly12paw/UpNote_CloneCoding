import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div className='overflow-hidden'>
            <div className='flex items-center border-b border-gray-300 pb-2 p-2'>
                <img src="https://play-lh.googleusercontent.com/gaZVK4KHlhoYfrZqwD9o0t_utTyMK9g4KlRqskfygJYNOVlViCWXN_1NLIv5GJkDygo" alt="logo" className='w-6 ml-8'/>
                <p className='ml-2'>UpNote</p>
            </div>
            <Navbar />
            <div className='w-screen h-screen flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

