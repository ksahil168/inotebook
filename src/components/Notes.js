import React, {useContext, useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
        // eslint-disable-next-line
        getNotes()
        // eslint-disable-next-line
    }, [])
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            
            
            
        
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </>
    )
}

export default Notes
