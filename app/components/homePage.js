import React from 'react';
import Search from './search';
import Auth from './auth';
import firebaseModel from '../firebase-model';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: firebaseModel.getUser() };
    this.processUser = this.processUser.bind(this);
    this.searchForItem = this.searchForItem.bind(this);
  }

  componentWillMount() {
    firebaseModel.onAuthStateChanged(this.processUser);
    this.processUser(firebaseModel.getUser());
  }

  processUser(authed) {
    this.setState({ user: authed });
  }

  getInitialState() {
    return {
      //TODO
    };
  }


  searchForItem(e) {
    if(e.key === 'Enter')
      window.location = '/#/search';
  }

  render() {
    return (
      <div>
      <div id="jumbotron">
          <img src="./resources/images/app_logo_homepage.png" id="header-title"/>
          <img src="./resources/images/app_homepage1.jpg" id="header-background"/>
      </div>
      {
        (this.state.user) ?
          <div>

          <div id = "search">
            <input onKeyPress={this.searchForItem} />
          </div>

          <div id = "home-images">
            <Link to= 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/cardboard.png" className = "topImage"/></p>
            </Link>

            <Link to= 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/cosmetic.png" className = "topImage"/> </p>
            </Link>

            <Link to = 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/dishwasher.png" className = "topImage"/></p>
            </Link>

            <Link to = 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/laundry.png" className = "botImage"/></p>
            </Link>

            <Link to = 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/shampoo.png" className = "botImage"/> </p>
            </Link>

            <Link to = 'search'>
            <p className = "content">
            <img src="./resources/images/Categories/spray.png" className = "botImage"/></p>
            </Link>
          </div></div> :
          <Auth type="signin" />
      }
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.func,
};

export default HomePage;
