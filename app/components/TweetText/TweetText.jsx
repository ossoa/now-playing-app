var React = require('react');
var styles = require('./TweetText.scss');

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
      <div className={styles.tweetBox}>
        <p className={styles.tbText} onClick={this.openTweet}>{tweet.text}</p>
        <p className={styles.tbUser}>by <a href={userUrl}>{tweet.user.screen_name}</a></p>
      </div>
    );
  }
});

module.exports = TweetText;
