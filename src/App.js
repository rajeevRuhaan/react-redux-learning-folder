import React, { useEffect } from "react";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";

import { initializeNotes } from "./store/reducers/reducer";
import { useDispatch } from "react-redux";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
