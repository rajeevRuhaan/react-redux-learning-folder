import React from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../store/reducers/reducer";

function NewNote(props) {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addTodo = async (e) => {
    e.preventDefault();

    const text = e.target.note.value;
    dispatch(createNote(text));
    e.target.note.value = "";
  };
  return (
    <form onSubmit={addTodo}>
      <input type="text" name="note" />
      <input type="submit" value="Add note" />
    </form>
  );
}

export default NewNote;
