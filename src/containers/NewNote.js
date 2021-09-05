import React, { useState } from "react";
import { createNew } from "../services/notes";
import { ADD_TODO } from "../store/actions";
import { useDispatch } from "react-redux";

function NewNote() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ note: "" });

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createNew(form.note);
    //save to redux store
    dispatch({ type: ADD_TODO, data: res });

    setForm({ note: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note"
        value={form.note}
        onChange={handleChange}
        required
      />
      <input type="submit" />
    </form>
  );
}

export default NewNote;
