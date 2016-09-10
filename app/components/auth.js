import React from 'react';
import firebaseModel from '../firebase-model';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    firebaseModel.login();
  }

  logout(e) {
    e.preventDefault();
    firebaseModel.logout();
  }

  render() {
    return (
      <div>
        {
          (this.props.type === 'signin') ?
            <div id="signin-container">
              <div id="signin-content">
                <div id="signin-text">Sign In</div>
                <hr />
                <button id="google-signin" onClick={this.login}></button>
              </div>
            </div> :
            <div id="logout-container">
              <button className="pure-button" id="google-auth" onClick={this.logout}>Log out</button>
            </div>
        }
      </div>
    );
  }
}

Auth.propTypes = { type: React.PropTypes.string.isRequired };

export default Auth;
