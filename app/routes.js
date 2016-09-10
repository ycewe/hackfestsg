import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homePage';
import EntryPage from './components/entryPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/saved" component={HomePage} />
    <Route path="/upload" component={HomePage} />
    <Route path="/search" component={HomePage} />
    <Route path="entry/:entryid" component={EntryPage} />
  </Route>
);