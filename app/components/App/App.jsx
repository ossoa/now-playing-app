var React = require('react');
var NowPlayingBox = require('../NowPlaying');
require('./App.scss');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="body-blur"></div>
        <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={20000} />
      </div>
    );
  }
});
