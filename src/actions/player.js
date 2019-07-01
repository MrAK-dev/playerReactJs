import axios from "axios";

import * as types from "../actionsTypes/actionsTypes";

const API_KEY = "AIzaSyBkoO6rb4EfNEqg-zObtEuw0UKuBEfFiyo";
const URL = `https://www.googleapis.com/youtube/v3/activities?key=${API_KEY} HTTP/1.1`;

export const addTrack = payload => ({
  type: types.ADD_TRACK,
  payload
});

export const findTrack = payload => ({
  type: types.FIND_TRACK,
  payload
});

const getTrackRequest = payload => ({
  type: types.GET_TRACK_REQUEST,
  payload
});

const getTrackRequestSuccess = payload => ({
  type: types.GET_TRACK_REQUEST_SUCCESS,
  payload
});

const getTrackRequestFail = payload => ({
  type: types.GET_TRACK_REQUEST_FAIL,
  payload
});

export const getTracks = () => dispatch => {
  dispatch(getTrackRequest());
  return axios
    .get(URL)
    .then(res => dispatch(getTrackRequestSuccess(res)))
    .catch(err => dispatch(getTrackRequestFail(err)));
};
export const deleteTrack = payload => ({
  type: types.DELETE_TRACK,
  payload
});
