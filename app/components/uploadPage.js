import React from 'react';
import firebaseModel from '../firebase-model';
import Dropzone from 'react-dropzone';

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
    const dropzoneContainerStyle = {
      background: '#419be0',
      top: '3.1rem',
      color: '#333',
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }

    const style = {
      top: '4rem',
      position: 'relative',
      margin: '20px',
      padding: '20px',
      boxShadow: '3px 3px 5px #888888',
      textAlign: 'center',
    }

    const starStyle = {
      width: '40px',
      height: '40px',
      margin: '0 5px',
    }

    const tagStyle = {
      backgroundColor: 'orange',
      borderRadius: '20px',
    }

    const dropzoneStyle = {
      borderRadius: '200px',
      border: '2px dotted white',
      width: '250px',
      height: '250px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }

    const activeDropzoneStyle = {
      backgroundColor: 'aliceBlue',
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
        <div className="dropzone-container" style={dropzoneContainerStyle}>
          <Dropzone style={dropzoneStyle} activeStyle={activeDropzoneStyle}>
            <div><img src="/resources/images/Icons/camera.png" style={starStyle}/></div><div>Upload a display photo</div>
          </Dropzone>
        </div>
        <div className="entry-details" style={style}>
          <div>
            <span className="entry-name">Entry name:</span><input type="text" className="entry-input" />
          </div>
        <hr />
          <div>
            <button className="add-tag-button pure-button">+ Add Tags</button>
          </div>
        </div>
        <div className="entry-instructions" style={style}>
          <span className="instruct-title">What do you need?</span>
          <input type="checkbox" id="instruct-toggle" /><label htmlFor="instruct-toggle" id="instruct-toggle-label"></label>
          <div className="instruct-content"></div>
        </div>
        <div className="entry-recraft" style={style}>
          <span className="recraft-title">How did you Re-Craft it?</span>
          <input type="checkbox" id="recraft-toggle" /><label htmlFor="recraft-toggle" id="recraft-toggle-label"></label>
          <div className="recraft-content"></div>
        </div>
      </div>
    );
  }
}

UploadPage.defaultProps = { name: 'Invalid', rating: 0, tags: 1 };

export default UploadPage;
