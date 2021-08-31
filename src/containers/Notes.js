import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE, TOGGLE_TODO } from '../store/actions';
import { deleteNote } from '../services/notes';

const Notes = ({ notes }) => {
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
  });

  const handleDelete = async (id) => {
    //delete note from backend
    await deleteNote(id);
    //update redux store
    dispatch({ type: DELETE_NOTE, data: id });
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? 'strike todo' : 'todo'}
          >
            {note.text}
            <span
              className='material-icons'
              onClick={() => handleDelete(note.id)}
            >
              delete_forever
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
