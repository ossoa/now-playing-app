
import {GET_PLAYING_ITEM, RECEIVE_PLAYING_ITEM} from '../actions/';

const initialState = {
  isFetching: false,
  data: {}
};

function playingItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYING_ITEM:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PLAYING_ITEM:
      return {
        ...state,
        isFetching: false,
        data: action.item
      };
    default:
      return state;
  }
}

export default playingItemReducer;
