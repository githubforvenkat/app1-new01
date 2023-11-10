import { combineReducers } from 'redux';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [...state, action.payload];
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
