import React, { Component } from "react";
import { connect } from "react-redux";
import VideoList from '../components/videoList'
import VideoDetail from '../components/videoDetail'
import {  selectTrack, getTracks } from "../actions/player";

class Player extends Component {
  onVideo = e => {
    const { selectTrack } = this.props
    selectTrack(e)
  }
  getTrackHandler = () => {
    const { getTracks } = this.props;
    getTracks(this.trackInput.value);
  };

  render() {
    const { video } = this.props;
  
    return (
      <div>
        <div className="search-bar">
          <input type="text" ref={input => (this.trackInput = input)} />
          {/* // Вместо ref использовать onChange */}
          <button onClick={this.getTrackHandler}>Get Video</button>
        </div>
        <div className='some-wrapper'>
        {video.selectedVideo && <VideoDetail  video={video.selectedVideo}/>}
        <VideoList 
          onVideoSelect={e => this.onVideo(e)}
          videos={video}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  video: state.player,
});

export default connect(
  mapStateToProps,
  { selectTrack, getTracks }
)(Player);
