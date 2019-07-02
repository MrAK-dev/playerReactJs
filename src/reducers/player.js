import {
  SELECT_TRACK,
  GET_TRACK_REQUEST,
  GET_TRACK_REQUEST_FAIL,
  GET_TRACK_REQUEST_SUCCESS
} from "../actionsTypes/actionsTypes";

const initialState = {
  videos:[],
  selectedVideo: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TRACK: {
      return {
        ...state,selectedVideo: action.payload
      };
    }

    case GET_TRACK_REQUEST: {
      return state;
    }

    case GET_TRACK_REQUEST_SUCCESS: {
      return {...state, videos:action.payload.data.items};
    }

    case GET_TRACK_REQUEST_FAIL: {
      return state;
    }
    default:
      return state;
  }
};
