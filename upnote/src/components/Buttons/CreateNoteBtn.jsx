import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import CreateNoteForm from '../Forms/CreateNoteForm';

export default function CreateNoteBtn({ btnLocation }) {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => setOpened(prev => !prev);

    const [notes, setNotes] = useState([]);
    const handleAdd = (note) => {setNotes([...notes, note])};
    
    useEffect(() => {
        localStorage.setItem(btnLocation, JSON.stringify(notes));
    }, [notes, btnLocation]);

    return (
        <>
            <button onClick={handleOpen}>
                <AiOutlinePlus />
            </button>
            { opened ? <CreateNoteForm handleOpen={handleOpen} onAdd={handleAdd} /> : '' }
        </>
    );
}

