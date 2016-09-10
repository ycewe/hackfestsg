import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <nav id="drawer">
        <ul id="drawer-menu">
          <li>Home</li>
          <li>Search</li>
          <li>Save</li>
          <li>Upload</li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
