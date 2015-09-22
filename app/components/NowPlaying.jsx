var React = require('react');
var http = require('../utils/http');
var TweetText = require('./TweetText.jsx');

var NowPlayingBox = React.createClass({
  loadNowPlayingItemFromServer: function() {
    http.request('GET', this.props.url, function(error, data) {
      console.log('data', data);
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

    return (
      <div className="nowPlayingBox">
        <TweetText tweet={tweetData} />
      </div>
    );
  }
});

module.exports = NowPlayingBox;
