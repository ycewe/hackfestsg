import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <nav id="drawer">
          <ul id="drawer-menu">
            <Link to={`/home`} style={style} activeStyle={activeStyle}>
              <li><img src="./resources/images/Icons/home.png" alt="home" className="menu-icon"/>Home</li>
            </Link>
            <Link to={`/search`} style={style} activeStyle={activeStyle}>
              <li><img src="./resources/images/Icons/search.png" alt="home" className="menu-icon"/>Search</li>
            </Link>
            <Link to={`/saved`} style={style} activeStyle={activeStyle}>
              <li><img src="./resources/images/Icons/saved.png" alt="home" className="menu-icon"/>Saved</li>
            </Link>
            <Link to={`/upload`} style={style} activeStyle={activeStyle}>
              <li><img src="./resources/images/Icons/upload.png" alt="home" className="menu-icon"/>Upload</li>
            </Link>
          </ul>
      </nav>
    );
  }
}

const style = {
  color: 'black',
  textDecoration: 'none',
}

const activeStyle = {
  color: 'red',
  textDecoration: 'none',
}

export default Menu;
