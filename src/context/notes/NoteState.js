import React,{ useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    
      {
        "_id": "65b8911abadc4ca1d296bdec",
        "user": "65b75668975c035417d008db",
        "title": "My Title",
        "description": "please wake up early",
        "tag": "personal",
        "__v": 0
      },
      {
        "_id": "65b8913bbadc4ca1d296bdee",
        "user": "65b75668975c035417d008db",
        "title": "Myckumar Title",
        "description": "please2 wake up early",
        "tag": "per2sonal",
        "__v": 0
      },
      {
        "_id": "65b89361f041b561957d40a7",
        "user": "65b75668975c035417d008db",
        "title": "Myckumar Title",
        "description": "please2 wake up early",
        "tag": "per2sonal",
        "Date": "2024-01-30T06:12:49.590Z",
        "__v": 0
      }
    ]
  const[notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes,setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
