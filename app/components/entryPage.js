import React from 'react';
import firebaseModel from '../firebase-model';

class EntryPage extends React.Component {
  render() {
    const imageStyle = {
      background: '#419be0',
      top: '3.1rem',
      color: '#333',
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '-1',
    }

    return (
      <div id="entry-page">
        <img src='./resources/images/app_homepage2.jpg' />
        <div id="entry-details">
          <div>
            <span classNames="entry-name">{this.props.name}</span>
            <span classNames="entry-rating"></span>
          </div>
        <hr />
          <div>
            <span className="entry-username">{firebaseModel.getUser().name}</span>
            <span className="entry-tags"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryPage;
