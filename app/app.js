import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes}>
  </Router>,
  document.getElementById('root')
);

/**
 * Service worker registration
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
