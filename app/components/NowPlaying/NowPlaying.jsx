import React from 'react';
import http from '../../utils/http';
import TweetText from '../TweetText';
import SpotifyImage from '../SpotifyImage';
import AudioPlayback from '../AudioPlayback';
import styles from './NowPlaying.scss';

export default class NowPlayingBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
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

  loadNowPlayingItemFromServer() {
    http.request('GET', this.props.url, function(error, response) {
      if (error) {
        console.error(this.props.url, status, error.toString());
        return;
      }

      let data = response.responseText ? JSON.parse(response.responseText) : null;
      this.setState({data:data});
    }.bind(this));
  }

  componentDidMount() {
    this.loadNowPlayingItemFromServer();
    setInterval(this.loadNowPlayingItemFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    let tweetData = this.state.data.tweet;
    let spotifyData = this.state.data.spotify;
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
