import React from 'react';
import firebaseModel from '../firebase-model';

class Header extends React.Component {
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
    const photoUrl = './resources/images/Icons/user_default.png';
    if(this.state.user) {
      const photoUrl = (this.state.user.photoUrl) ? this.state.user.photoUrl : './resources/images/Icons/user_default.png';
    }

    const style = {
      position: 'relative',
      left: '33rem',
      width: '50px',
      height: '50px',
    }

    return(
      <div>
        <div className="app-header">
          <div></div>
          <img src={photoUrl} style={style}/>
        </div>
        <div id="jumbotron">
            <img src="./resources/images/app_logo_homepage.png" id="header-title"/>
            <img src="./resources/images/app_homepage1.jpg" id="header-background"/>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
