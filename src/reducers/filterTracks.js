import { FIND_TRACK } from "../actionsTypes/actionsTypes";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_TRACK: {
      return action.payload;
    }
    default:
      return state;
  }
};
