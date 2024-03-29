import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

export default function App() {
  const [notesArray, setNotesArray] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    try {
      const res = await axios.get("http://localhost:8000/api");
      setNotesArray(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  // function addNote(note) {
  //   // console.log(note);
  //   setNotesArray((prevNote) => {
  //     return [...prevNote, note];
  //   });
  // }
  // function deletes(id) {
  //   setNotesArray((prevNote) => {
  //     return prevNote.filter((data, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  return (
    <>
      <Header />
      <CreateArea
        // onAdd={addNote}
        getNotes={getNotes}
      />
      {notesArray.map((data, index) => (
        <Note
          id={data._id}
          key={index}
          title={data.title}
          content={data.content}
          getNotes={() => getNotes()}
          // onDelete={deletes}
        />
      ))}
      <Footer />
    </>
  );
}
