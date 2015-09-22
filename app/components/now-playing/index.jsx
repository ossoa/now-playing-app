var React = require('react');
var http = require('../../utils/http');
var TweetText = require('../tweet-text/index.jsx');
var SpotifyImage = require('../spotify-image/index.jsx');
var AudioPlayback = require('../audio-playback/index.jsx');
require('./styles.scss');

var NowPlayingBox = React.createClass({
  loadNowPlayingItemFromServer: function() {
    http.request('GET', this.props.url, function(error, data) {
      if (error) {
        console.error(this.props.url, status, error.toString());
        return;
      }

      var data = data.responseText ? JSON.parse(data.responseText) : null;
      this.setState({data:data});
    }.bind(this));
  },
  getInitialState: function() {
    return {data: {}};
  },
  componentDidMount: function() {
    this.loadNowPlayingItemFromServer();
    setInterval(this.loadNowPlayingItemFromServer, this.props.pollInterval);
  },
  render: function() {
    var tweetData = this.state.data.tweet;
    var spotifyData = this.state.data.spotify;

    if (tweetData) {
      return (
        <div className="now-playing-box">
          <SpotifyImage spotify={spotifyData} />
          <AudioPlayback spotify={spotifyData} />
          <TweetText tweet={tweetData} />
        </div>
      );
    } else {
      return (
        <div className="loading-box">
          Loading...
        </div>
      );
    }
  }
});

module.exports = NowPlayingBox;
