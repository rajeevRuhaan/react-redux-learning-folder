import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, toggleTodo } from "../services/notes";
import { DELETE_NOTE, TOGGLE_TODO } from "../store/actions";

function Notes({ notes }) {
  console.log(notes);
  const dispatch = useDispatch();

  const toggleNote = async (id, text, completed) => {
    await toggleTodo(id, text, completed);
    dispatch({
      type: TOGGLE_TODO,
      data: id,
    });
  };

  const handleDelete = async (id) => {
    await deleteNote(id);

    dispatch({
      type: DELETE_NOTE,
      data: id,
    });
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => toggleNote(note.id, note.text, note.completed)}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
            <span
              className="material-icons"
              onClick={() => handleDelete(note.id)}
            >
              delete_forever
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
