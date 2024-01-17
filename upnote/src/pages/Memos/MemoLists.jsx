import React, { useEffect, useState } from 'react';
import Editor from '../../api/Lexical/Editor';
import MemoMenu from '../../components/MemoMenu/MemoMenu';
import { AiOutlinePlus } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

export default function MemoLists() {
    const noteTitle = JSON.parse(localStorage.getItem('notetitle'));
    
    const [datas, setDatas] = useState();
    const handleData = (data) => setDatas(data);
    // datas.root.children.map((item) => console.log(item.children.map((i) => i.text)));
    // console.log(datas);
    
    const [memos, setMemos] = useState([]);
    const [memoLists, setMemoLists] = useState([]);
    const [stored, setStored] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(noteTitle);
            if (stored !== null) {
                return JSON.parse(stored);
            } else return [];
        }
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (datas) {
            setDatas(null);
            setStored(prevStored => [...prevStored, datas]);
            setMemoLists(stored);
            // localStorage.setItem(noteTitle, JSON.stringify(stored));
        }
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (datas) {
            setMemos(datas);
        }
        const intervalId = setInterval(() => {
            if (datas !== memos) {
                setMemos(datas);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [datas, memos]);

    // useEffect(() => {
    //     if (stored) {
    //         setMemoLists(stored);
    //         setDatas(null);
    //     }
    //     const intervalId = setInterval(() => {
    //         const localData = localStorage.getItem(noteTitle);
    //         if (localData && localData !== JSON.stringify(memoLists)) {
    //                 localStorage.setItem(noteTitle, JSON.stringify(memoLists));
    //         } else localStorage.setItem(noteTitle, JSON.stringify(memoLists));
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [stored, memoLists, noteTitle]);
    
    useEffect(() => {
        localStorage.setItem(noteTitle, JSON.stringify(stored));
    }, [stored, noteTitle]);
    
    const [noteLength, setNoteLength] = useState(() => {
            if (typeof window !== "undefined") {
                const length = localStorage.getItem(noteTitle);
                if (length !== null) {
                    return JSON.parse(length).length;
                } else return 0;
            }
    });

    return (
        <div className='w-full h-full flex justify-center'>
            <div className={isOpen ? 'w-[35%]' : 'w-full'}>
                <div className='border border-gray-200 bg-gray-100 border-r-0 w-full flex justify-between items-center py-[0.65rem] text-lg'>
                    <p className='ml-8'>{noteTitle} <span className='text-gray-400 ml-4'>( {noteLength ? noteLength : 0} )</span></p>
                    <button onClick={handleOpen} className='mr-8 text-2xl'>{isOpen ? <IoExitOutline /> : <AiOutlinePlus />}</button>
                </div>
                <MemoMenu />
            </div>
            {isOpen ? <div className='w-[65%] border border-gray-200 bg-gray-100'>
                <Editor data={handleData} />
            </div> : ''}
        </div>
    );
}

