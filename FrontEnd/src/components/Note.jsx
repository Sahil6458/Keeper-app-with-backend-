import axios from "axios";
import React from "react";

function Note(props) {
  async function handleDelete(id) {
    try {
      const res = await axios.delete(`http://localhost:8000/api/delete/${id}`);
      props.getNotes();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => handleDelete(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
