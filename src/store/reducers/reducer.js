import { ADD_TODO, INIT_NOTES, DELETE_NOTE } from '../actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INIT_NOTES:
      return action.data;

    case ADD_TODO:
      return [...state, action.data];

    case DELETE_NOTE:
      const updateArray = state.filter((note) => note.id !== action.data);
      return updateArray;

    default:
      return state;
  }
};

export default reducer;
