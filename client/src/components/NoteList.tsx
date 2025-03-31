import React, { useEffect, useState } from "react";
import { getNotes } from "../services/note";
import { Note } from "../types/note";

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (error) {
        throw new Error("Fail to fetch data.");
      }
    };
    fetchNotes();
  }, []);
  return (
    <div>
      <h2>NoteList</h2>
      <ul>
        {/* {notes.map((note, index) => (
          <li key={index}>{note.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default NoteList;
