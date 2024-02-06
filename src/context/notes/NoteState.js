import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "165b8911abadc4ca1d296bdec",
      user: "65b75668975c035417d008db",
      title: "My Title",
      description: "please wake up early",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "265b8913bbadc4ca1d296bdee",
      user: "65b75668975c035417d008db",
      title: "Myckumar Title",
      description: "please2 wake up early",
      tag: "per2sonal",
      __v: 0,
    },
    {
      _id: "365b89361f041b561957d40a7",
      user: "65b75668975c035417d008db",
      title: "Myckumar Title",
      description: "please2 wake up early",
      tag: "per2sonal",
      Date: "2024-01-30T06:12:49.590Z",
      __v: 0,
    },
    {
      _id: "465b8913bbadc4ca1d296bdee",
      user: "65b75668975c035417d008db",
      title: "Myckumar Title",
      description: "please2 wake up early",
      tag: "per2sonal",
      __v: 0,
    },
    {
      _id: "565b89361f041b561957d40a7",
      user: "65b75668975c035417d008db",
      title: "Myckumar Title",
      description: "please2 wake up early",
      tag: "per2sonal",
      Date: "2024-01-30T06:12:49.590Z",
      __v: 0,
    },
    {
      _id: "665b8913bbadc4ca1d296bdee",
      user: "65b75668975c035417d008db",
      title: "Myckumar Title",
      description: "please2 wake up early",
      tag: "per2sonal",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note

  const addNote = (title, description, tag) => {
    console.log("Adding a new Note");
    const note = {
      _id: "665b8913bbadc4ca1d296bdee",
      user: "65b75668975c035417d008db",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = (id) => {};
  //Edit a Note

  const EditNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, EditNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
