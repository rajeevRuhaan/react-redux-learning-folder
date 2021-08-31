import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";

function Notes(props) {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id,
  });

  const deleteTodo = (id) => ({
    type: actionTypes.DELETE_NOTE,
    id: id,
  });
  //   const texts = useSelector((state) => state.texts);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
            <span
              className="material-icons"
              onClick={() => dispatch(deleteTodo(note.id))}
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
