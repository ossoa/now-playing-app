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
      <div className="tweet-box">
        <p className="tb-text" onClick={this.openTweet}>{tweet.text}</p>
        <p className="tb-user">by <a href={userUrl}>{tweet.user.screen_name}</a></p>
      </div>
    );
  }
});

module.exports = TweetText;
