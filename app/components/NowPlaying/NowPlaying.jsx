import React from 'react';
import {connect} from 'react-redux';

import TweetText from '../TweetText';
import SpotifyImage from '../SpotifyImage';
import AudioPlayback from '../AudioPlayback';
import styles from './NowPlaying.scss';

const mapStateToProps = (state) => {
  if (state.data) {
    return {
      spotify: state.data.spotify,
      tweet: state.data.tweet
    };
  }
  else {
    return {};
  }
};

class NowPlayingBox extends React.Component {
  constructor(...args) {
    super(...args);
  }

  getPreview (spotifyObj) {
    if (!spotifyObj) return false;

    switch (spotifyObj.type) {
      case 'track':
        return spotifyObj.preview_url;
      case 'playlist':
      case 'album':
      case 'artist':
      default:
        return false;
    }
  }

  render() {
    let tweetData = this.props.tweet;
    let spotifyData = this.props.spotify;
    let audioUrl = this.getPreview(spotifyData);

    if (tweetData) {
      return (
        <div className={styles.nowPlayingBox}>
          <SpotifyImage spotify={spotifyData} />
          <TweetText tweet={tweetData} />
          <AudioPlayback audio={audioUrl} />
        </div>
      );
    } else {
      return (
        <div className={styles.loadingBox}>
          Loading...
        </div>
      );
    }
  }
}

NowPlayingBox.propTypes = {
  spotify: React.PropTypes.object,
  tweet: React.PropTypes.object,
  onReload: React.PropTypes.func
};

const NowPlayingBoxContainer = connect(
  mapStateToProps
)(NowPlayingBox);

export default NowPlayingBoxContainer;
