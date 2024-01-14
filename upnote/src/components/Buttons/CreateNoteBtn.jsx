import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import CreateNoteForm from '../Forms/CreateNoteForm';

export default function CreateNoteBtn({ btnLocation }) {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => setOpened(prev => !prev);

    // const [notes, setNotes] = useState([]);
    // const [sides, setSides] = useState([]);
    // const [lists, setLists] = useState([]);

    // const handleAdd = (note) => {
    //     btnLocation === 'sidenote' ? setSides([...sides, note]) : setLists([...lists, note])
    // }; 

    // console.log(sides, lists);
    const [notes, setNotes] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(btnLocation);
            if (stored !== null) {
                return JSON.parse(stored);
            } else return [];
        }
    });
    const handleAdd = (note) => {setNotes([...notes, note])};
    
    useEffect(() => {
        localStorage.setItem(btnLocation, JSON.stringify(notes));
    }, [notes, btnLocation]);

    // const [notebooks, setNotebooks] = useState([]);

    // useEffect(() => {
    //     const listsnote = localStorage.getItem('listsnote');
    //     const sidenote = localStorage.getItem('sidenote');
    
    //     const note1 = listsnote ? JSON.parse(listsnote) : [];
    //     const note2 = sidenote ? JSON.parse(sidenote): [];
    
    //     setNotebooks([...note1, ...note2].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    // }, [notes]);
    // console.log(notebooks);

    return (
        <>
            <button onClick={handleOpen}>
                <AiOutlinePlus />
            </button>
            { opened ? <CreateNoteForm handleOpen={handleOpen} onAdd={handleAdd} /> : '' }
        </>
    );
}

