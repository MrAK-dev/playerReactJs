import { ADD_PLAYLIST, DELETE_PLAYLIST } from "../actionsTypes/actionsTypes";

const initialState = ["Chill Playlist", "Work Playlist", "EDM"];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLIST: {
      return [...state, action.payload];
    }
    case DELETE_PLAYLIST: {
      return state;
    }
    default:
      return state;
  }
};
