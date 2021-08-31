import * as actionTypes from "../actions";
import noteServices from "../../services/notes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;

    case actionTypes.ADD_TODO:
      return [...state, action.data];

    case actionTypes.DELETE_NOTE:
      // const updateArray = state.filter((note) => note.id !== action.id);
      return {
        ...state,
      };

    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeNote));

    default:
      return state;
  }
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll();
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await noteServices.createNew(text);
    dispatch({
      type: actionTypes.ADD_TODO,
      data: newNote,
    });
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_TODO,
      id: id,
    });
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    await noteServices.deleteNote(id);
    dispatch({
      type: actionTypes.DELETE_NOTE,
      data: id,
    });
  };
};

// const initialState = {
//   notes: [{ id: 1, text: "Somenotes", completed: false }],
//   texts: [{ id: 1, text: "Sometext", completed: false }],
// };
export default reducer;
