var React = require('react');

var TweetText = React.createClass({
  render: function() {
    var tweet = this.props.tweet;

    console.log(tweet);
    if (tweet) {
      return (
        <div className="nowPlayingBox">
          <p>{tweet.text}</p>
          <p>by <a href="{tweet.user.screen_name}"> {tweet.user.screen_name}</a></p>
        </div>
      );
    } else {
      return (<div>Loading</div>);
    }
  }
});

module.exports = TweetText;
