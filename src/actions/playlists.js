import * as types from "../actionsTypes/actionsTypes";

export const addPlaylist = payload => ({
  type: types.ADD_PLAYLIST,
  payload
});

export const deletePlaylist = paylaod => ({
  type: types.DELETE_PLAYLIST,
  paylaod
});
