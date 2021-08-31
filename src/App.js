import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notes from './containers/Notes';
import NewNote from './containers/NewNote';
import { getAll } from './services/notes';
import { INIT_NOTES } from './store/actions';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const loadNotes = async () => {
    //get all the notes from database
    const res = await getAll();

    //save all notes into redux store
    dispatch({ type: INIT_NOTES, data: res });
  };
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className='App'>
      <NewNote />
      <Notes notes={notes} />
    </div>
  );
};

export default App;
