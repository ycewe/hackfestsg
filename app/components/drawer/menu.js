import React from 'react';
import Auth from '../auth';
import firebaseModel from '../../firebase-model';
import { IndexLink, Link } from 'react-router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: firebaseModel.getUser() };
    this.processUser = this.processUser.bind(this);
  }

  componentWillMount() {
    firebaseModel.onAuthStateChanged(this.processUser);
    this.processUser(firebaseModel.getUser());
  }

  processUser(authed) {
    this.setState({ user: authed });
  }

  render() {
    return (
      <nav id="drawer">
          <ul id="drawer-menu">
            <IndexLink to='/' style={style} activeStyle={activeStyle} activeClassName='activeLink'>
              <li><img src="./resources/images/Icons/home.png" alt="home" className="menu-icon"/>Home</li>
            </IndexLink>
            <Link to='search' style={style} activeStyle={activeStyle} activeClassName='activeLink'>
              <li><img src="./resources/images/Icons/search.png" alt="home" className="menu-icon"/>Re-Search</li>
            </Link>
            <Link to='saved' style={style} activeStyle={activeStyle} activeClassName='activeLink'>
              <li><img src="./resources/images/Icons/saved.png" alt="home" className="menu-icon"/>Re-Collection</li>
            </Link>
            <Link to='upload' style={style} activeStyle={activeStyle} activeClassName='activeLink'>
              <li><img src="./resources/images/Icons/upload.png" alt="home" className="menu-icon"/>Re-Designs</li>
            </Link>
            {
              (this.state.user)
              ? <Auth type="logout" /> : <div />
            }
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
