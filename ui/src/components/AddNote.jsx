import React, { useState } from "react";

function AddNote(props) {
  const [currentNote, setCurrentNote] = useState({ title: "", content: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCurrentNote((previousNote) => ({ ...previousNote, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(currentNote);
    setCurrentNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleInputChange}
          value={currentNote.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleInputChange}
          value={currentNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddNote;
