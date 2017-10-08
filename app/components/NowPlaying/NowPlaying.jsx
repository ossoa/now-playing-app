import React from 'react';
import PropTypes from 'prop-types';

import TweetText from '../TweetText';
import SpotifyImage from '../SpotifyImage';
import AudioPlayback from '../AudioPlayback';
import styles from './NowPlaying.scss';

class NowPlaying extends React.Component {
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
        <div>
          <div className="body-blur"></div>
          <div className={styles.nowPlayingBox}>
            <SpotifyImage spotify={spotifyData} />
            <TweetText tweet={tweetData} />
            <AudioPlayback audio={audioUrl} />
          </div>
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

NowPlaying.propTypes = {
  spotify: PropTypes.object,
  tweet: PropTypes.object,
  onReload: PropTypes.func
};

export default NowPlaying;
