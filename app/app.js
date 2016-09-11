import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homePage';
import SearchPage from './components/SearchPage';
import EntryPage from './components/entryPage';
import UploadPage from './components/uploadPage';
import SavedPage from './components/savedPage';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="saved" component={SavedPage} />
      <Route path="upload" component={UploadPage} />
      <Route path="search(/:searchId)" component={SearchPage} />
      <Route path="entry(/:entryId)" component={EntryPage} />
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
