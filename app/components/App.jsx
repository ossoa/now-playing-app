var React = require('react');
var NowPlayingBox = require('./NowPlaying.jsx');
require('./main.scss');

module.exports = React.createClass({
  render: function () {
    return (
      <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={10000} />
    );
  }
});
