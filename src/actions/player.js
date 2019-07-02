import axios from "axios";

import * as types from "../actionsTypes/actionsTypes";

const API_KEY = "AIzaSyBkoO6rb4EfNEqg-zObtEuw0UKuBEfFiyo";
const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&`;

export const selectTrack = payload => ({
  type: types.SELECT_TRACK,
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

export const getTracks = (terms) => dispatch => {
  dispatch(getTrackRequest());
  return axios
    .get(`${URL}q=${terms}&key=${API_KEY}`)
    .then(res => dispatch(getTrackRequestSuccess(res)))
    .catch(err => dispatch(getTrackRequestFail(err)));
};
