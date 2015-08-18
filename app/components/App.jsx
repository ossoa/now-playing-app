var React = require('react');
var NowPlayingBox = require('./NowPlaying.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={10000} />
    );
  }
});
