import React from 'react';
import styles from './TweetText.scss';

class TweetText extends React.Component {
  openTweet() {
    let tweet = this.props.tweet;
    let tweetUrl = 'https:/twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str;

    window.open(tweetUrl, '_blank');
  }

  render() {
    let tweet = this.props.tweet;
    let userUrl = 'https:/twitter.com/' + tweet.user.screen_name;

    return (
      <div className={styles.tweetBox}>
        <p className={styles.tbText} onClick={this.openTweet.bind(this)}>{tweet.text}</p>
        <p className={styles.tbUser}>by <a href={userUrl}>{tweet.user.screen_name}</a></p>
      </div>
    );
  }
}

TweetText.propTypes = {
  tweet: React.PropTypes.object
};

export default TweetText;
