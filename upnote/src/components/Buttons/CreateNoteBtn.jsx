import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import CreateNoteForm from '../Forms/CreateNoteForm';

export default function CreateNoteBtn() {
    const [opened, setOpened] = useState(false);
    const handelOpen = () => setOpened(prev => !prev);

    return (
        <>
            <button onClick={handelOpen}>
                <AiOutlinePlus />
            </button>
            { opened ? <CreateNoteForm handleOpen={handelOpen} /> : '' }
        </>
    );
}

