import React from 'react';
import Header from './header.js';
import HamburgerInput from './drawer/hamburger-input.js';
import HamburgerIcon from './drawer/hamburger-icon.js';
import Menu from './drawer/menu.js';

const appName = '';

class App extends React.Component {
  render() {
    return(
    <div>
      <HamburgerInput />
      <HamburgerIcon />
      <Header title={appName} />
      <Menu />
      <div id="page-body">
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default App;
