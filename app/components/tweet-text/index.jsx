var React = require('react');
require('./styles.scss');

var TweetText = React.createClass({
  openTweet: function() {
    var tweet = this.props.tweet;
    var tweetUrl = 'https:/twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str;

    window.open(tweetUrl, '_blank');
  },
  render: function() {
    var tweet = this.props.tweet;
    var userUrl = 'https:/twitter.com/' + tweet.user.screen_name;

    return (
      <div className="tweet-box" onClick={this.openTweet}>
        <p className="tb-text">{tweet.text}</p>
        <p className="tb-user">by {tweet.user.screen_name}</p>
      </div>
    );
  }
});

module.exports = TweetText;
