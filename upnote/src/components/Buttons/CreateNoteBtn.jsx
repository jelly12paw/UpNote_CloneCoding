import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import CreateNoteForm from '../Forms/CreateNoteForm';

export default function CreateNoteBtn({ btnLocation }) {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => setOpened(prev => !prev);

    const [notebooks, setNotebooks] = useState([]);
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

    useEffect(() => {
        const listsnote = localStorage.getItem('listsnote');
        const sidenote = localStorage.getItem('sidenote');
    
        const note1 = listsnote ? JSON.parse(listsnote) : [];
        const note2 = sidenote ? JSON.parse(sidenote): [];
    
        setNotebooks([...note1, ...note2].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    
    }, [notes]);
    
    useEffect(() => {
        localStorage.setItem('combined', JSON.stringify(notebooks));
    }, [notebooks]);

    return (
        <>
            <button onClick={handleOpen}>
                <AiOutlinePlus />
            </button>
            { opened ? <CreateNoteForm handleOpen={handleOpen} onAdd={handleAdd} /> : '' }
        </>
    );
}

