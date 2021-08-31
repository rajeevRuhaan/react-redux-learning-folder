import React, { useState } from 'react';
import { ADD_TODO } from '../store/actions';
import { useDispatch } from 'react-redux';
import { createNew } from '../services/notes';

const NewNote = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    note: '',
  });

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const addTodo = async (e) => {
    e.preventDefault();

    //save the note in database
    const res = await createNew(form.note);
    //save the new note into redux store
    dispatch({ type: ADD_TODO, data: res });
    //clear form
    setForm({ note: '' });
  };
  return (
    <form onSubmit={addTodo}>
      <input
        type='text'
        name='note'
        value={form.note}
        onChange={handleChange}
        required
      />

      <input type='submit' value='Add note' />
    </form>
  );
};

export default NewNote;
