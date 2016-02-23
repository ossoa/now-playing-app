import {connect} from 'react-redux';

import NowPlaying from '../NowPlaying';

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

const NowPlayingBoxContainer = connect(
  mapStateToProps
)(NowPlaying);

export default NowPlayingBoxContainer;
