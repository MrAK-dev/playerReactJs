import React, { Component } from "react";
import { connect } from "react-redux";

import { addTrack, findTrack, getTracks } from "../actions/player";

class Player extends Component {
  addTrackHandler = () => {
    const { addTrack } = this.props;
    addTrack(this.trackInput.value);
    this.trackInput.value = "";
  };
  findTrackHandler = () => {
    const { findTrack } = this.props;
    findTrack(this.searchTrackInput.value);
  };
  getTrackHandler = () => {
    const { getTracks } = this.props;
    getTracks();
  };
  render() {
    console.log(this.props.tracks);
    const { tracks } = this.props;
    return (
      <div>
        <div>
          <input type="text" ref={input => (this.trackInput = input)} />
          <button onClick={this.addTrackHandler}>Add track</button>
        </div>
        <div>
          <input type="text" ref={input => (this.searchTrackInput = input)} />
          <button onClick={this.findTrackHandler}>Find track</button>
        </div>
        <div>
          <button onClick={this.getTrackHandler}>Get Tracks</button>
        </div>
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>{track.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.player.filter(track => track.name.includes(state.filterTracks))
});

export default connect(
  mapStateToProps,
  { addTrack, findTrack, getTracks }
)(Player);
