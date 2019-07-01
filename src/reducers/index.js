import { combineReducers } from "redux";

import player from "./player";
import playlists from "./playlists";
import filterTracks from "./filterTracks";
export default combineReducers({
  player,
  playlists,
  filterTracks
});
