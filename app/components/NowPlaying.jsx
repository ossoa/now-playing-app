var React = require('react');
var http = require('../utils/http');

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
    console.log(this.state.data);
    var tweetData = this.state.data.tweet;
    var textNode;

    if (tweetData && tweetData.text) {
      textNode = (<p>{tweetData.text}</p>);
    }

    return (
      <div className="nowPlayingBox">
        <h1>Now Playing</h1>
        {textNode}
      </div>
    );
  }
});

module.exports = NowPlayingBox;
