import React from 'react';
import NowPlayingBox from '../NowPlaying';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="body-blur"></div>
        <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={20000} />
      </div>
    );
  }
}
