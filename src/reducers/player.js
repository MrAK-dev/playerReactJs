import {
  ADD_TRACK,
  GET_TRACK_REQUEST,
  GET_TRACK_REQUEST_FAIL,
  GET_TRACK_REQUEST_SUCCESS
} from "../actionsTypes/actionsTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK: {
      return [
        ...state,
        {
          id: Date.now().toString(),
          name: action.payload
        }
      ];
    }

    case GET_TRACK_REQUEST: {
      return state;
    }

    case GET_TRACK_REQUEST_SUCCESS: {
      return action.payload;
    }

    case GET_TRACK_REQUEST_FAIL: {
      return state;
    }
    default:
      return state;
  }
};
