import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  const [noteList, updateNoteList] = useState([]);

  // Fetch notes from backend on initial load
  async function fetchNotes() {
    try {
      const response = await fetch('http://localhost:5000/api/notetaker/GetNotes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      updateNoteList(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }
  
  useEffect(() => {
    fetchNotes();
  }, []);

  async function addNote(noteToAdd) {
    try {
      const response = await fetch('http://localhost:5000/api/notetaker/AddNotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(noteToAdd)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      await fetchNotes(); // Refresh notes list after adding
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }

  // Delete a note and refresh the note list
  async function deleteNote(noteId) {
    try {
      console.log("key to delete",noteId)
      const response = await fetch(`http://localhost:5000/api/notetaker/DeleteNotes?key=${noteId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      await fetchNotes(); // Refresh notes list after deleting
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {noteList.map((item, idx) => (
        <Note
          key={item.key}
          id={idx}
          title={item.title}
          content={item.content}
          onDelete={() => deleteNote(item.key)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
