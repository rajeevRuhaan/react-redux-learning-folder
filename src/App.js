import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";

import { getAll } from "./services/notes";

import "./App.css";
import { INIT_NOTES } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const loadNotes = async () => {
    const res = await getAll();
    dispatch({
      type: INIT_NOTES,
      data: res,
    });
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="App">
      <NewNote />
      <Notes notes={notes} />
    </div>
  );
};

export default App;
