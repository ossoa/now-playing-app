import React, { Component } from 'react';
import styles from './TweetText.scss';

export default class TweetText extends Component {
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
        <p className={styles.tbText} onClick={this.openTweet}>{tweet.text}</p>
        <p className={styles.tbUser}>by <a href={userUrl}>{tweet.user.screen_name}</a></p>
      </div>
    );
  }
};
