import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homePage';
import SearchPage from './components/SearchPage';
import EntryPage from './components/entryPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="saved" component={HomePage} />
      <Route path="upload" component={HomePage} />
      <Route path="search" component={SearchPage} />
      <Route path="entry/:entryid" component={EntryPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);

/**
 * Service worker registration
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
