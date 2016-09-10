import React from 'react';
import firebaseModel from '../firebase-model';

class UploadPage extends React.Component {
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

    const style = {
      top: '4rem',
      position: 'relative',
      margin: '20px',
      padding: '20px',
      boxShadow: '3px 3px 5px #888888',
    }

    const starStyle = {
      width: '20px',
      height: '20px',
      margin: '0 5px',
    }

    const tagStyle = {
      backgroundColor: 'orange',
      borderRadius: '20px',
    }

    let stars = [];
    if (this.props.rating < 5) {
      for (let i=0; i < 5 - this.props.rating; i++) {
          stars.push(<img src="./resources/images/Icons/star_empty.png" style={starStyle}/>);
      }
    }
    for (let i=0; i < this.props.rating; i++) {
        stars.push(<img src="./resources/images/Icons/star_filled.png" style={starStyle}/>);
    }

    let tags = []
    for (let i=0; i < this.props.tags; i++) {
        tags.push(<span className="tags">#stopthepretence</span>);
    }

    return (
      <div id="entry-page">
        <img style={imageStyle} src='./resources/images/app_homepage2.jpg' />
        <div className="entry-details" style={style}>
          <div>
            <span className="entry-name">{this.props.name}</span>
            <span className="entry-rating">
              {stars}
            </span>
          </div>
        <hr />
          <div>
            <span className="entry-username">{ (this.state.user) ? this.state.user.displayName : '' }</span>
            <span className="entry-tags">{tags}</span>
          </div>
        </div>
        <div className="entry-instructions" style={style}>
          <div className="instruct-title">What do I need?</div>
          <hr />
          <div className="instruct-content"></div>
        </div>
        <div className="entry-recraft">
          <button className="recraft-button">How do I recraft it?</button>
        </div>
      </div>
    );
  }
}

UploadPage.defaultProps = { name: 'Invalid', rating: 0, tags: 1 };

export default UploadPage;
