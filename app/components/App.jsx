var React = require('react');
var NowPlayingBox = require('./now-playing/index.jsx');
require('./app.scss');

module.exports = React.createClass({
  render: function () {
    return (
      <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={20000} />
    );
  }
});
