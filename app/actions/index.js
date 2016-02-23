import fetch from 'isomorphic-fetch';

const FEED_URL = 'https://now-playing-feed.herokuapp.com/';

export const GET_PLAYING_ITEM = 'GET_PLAYING_ITEM';
function getPlayingItem(data) {
  return {
    type: GET_PLAYING_ITEM,
    data
  };
}

export const RECEIVE_PLAYING_ITEM = 'RECEIVE_PLAYING_ITEM';
function receivePosts(data, json) {
  return {
    type: RECEIVE_PLAYING_ITEM,
    data,
    item: json,
    receivedAt: Date.now()
  };
}

export function fetchPlayingItem(data) {
  return function(dispatch) {
    dispatch(getPlayingItem(data));

    return fetch(FEED_URL)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(data, json)));
  };
}
