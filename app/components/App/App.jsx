import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import NowPlayingContainer from '../NowPlayingContainer';
import reducer from '../../reducers';
import {fetchPlayingItem} from '../../actions';

const POLL_INTERVAL = 20000;

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    store.dispatch(fetchPlayingItem({})).then(() =>
      this.render()
    );

    setInterval(() => this.reload(), POLL_INTERVAL);
  }

  reload() {
    const state = store.getState();

    if (!state.isFetching) {
      store.dispatch(fetchPlayingItem(state));
    }
  }

  render() {
    return (
      <Provider store={store}>
        <NowPlayingContainer />
      </Provider>
    );
  }
}
