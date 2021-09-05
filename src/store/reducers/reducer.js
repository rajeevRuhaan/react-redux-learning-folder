import * as actionTypes from "../actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;

    case actionTypes.ADD_TODO:
      return [...state, action.data];

    case actionTypes.DELETE_NOTE:
      const updateArray = state.filter((note) => note.id !== action.data);
      return updateArray;

    case actionTypes.TOGGLE_TODO:
      // return { ...state };
      const noteToChange = state.find((n) => n.id === action.data);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.data ? note : changeNote));

    default:
      return state;
  }
};

export default reducer;
