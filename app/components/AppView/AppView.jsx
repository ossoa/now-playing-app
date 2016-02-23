import React from 'react';
import NowPlayingBox from '../NowPlaying';
import './AppView.scss';

class AppView extends React.Component {
  render() {
    return (
      <div>
        <div className="body-blur"></div>
        <NowPlayingBox />
      </div>
    );
  }
}

export default AppView;
