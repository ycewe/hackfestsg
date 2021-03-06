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
    let photoUrl = './resources/images/Icons/user_default.png';
    console.log(window.location.href);
    if(this.state.user) {
      photoUrl = (this.state.user.photoUrl) ? this.state.user.photoUrl : './resources/images/Icons/user_default.png';
    } else {
      photoUrl = '';
    }

    const style = {
      position: 'absolute',
      right: '10px',
      width: '40px',
      height: '40px',
    }

    const inactiveStyle = {
      opacity: 0,
    }

    const usernameStyle = {
      position: 'absolute',
      right: '70px',
      fontSize: '15px',
    }

    return(
      <div>
        <div className="app-header">
          <div></div>
          <span style={usernameStyle}>{(photoUrl) ? this.state.user.displayName : ''}</span><img src={photoUrl} style={(photoUrl) ? style : inactiveStyle}/>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
