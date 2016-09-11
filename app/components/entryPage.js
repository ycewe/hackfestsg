import React from 'react';
import firebaseModel from '../firebase-model';

class EntryPage extends React.Component {
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

    let imgUrl = './resources/images/app_homepage2.jpg';
    switch(this.props.location.pathname) {
        case '/entry/1':
          imgUrl = './resources/images/Entries/1.jpg';
          break;
        case '/entry/2':
          imgUrl = './resources/images/Entries/2.jpg';
            break;
        case '/entry/3':
          imgUrl = './resources/images/Entries/3.jpg';
            break;
        case '/entry/4':
          imgUrl = './resources/images/Entries/4.jpg';
            break;
        case '/entry/5':
          imgUrl = './resources/images/Entries/5.jpg';
            break;
        case '/entry/6':
          imgUrl = './resources/images/Entries/6.jpg';
            break;
        case '/entry/7':
          imgUrl = './resources/images/Entries/7.jpg';
            break;
        case '/entry/8':
          imgUrl = './resources/images/Entries/8.jpg';
            break;
    }

    return (
      <div id="entry-page">
        <img style={imageStyle} src={imgUrl} />
        <div className="entry-details" style={style}>
          <div>
            <img src="./resources/images/Icons/saved.png" style={starStyle} /><span className="entry-name">{this.props.name}</span>
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
          <span className="instruct-title">What do I need?</span>
          <input type="checkbox" id="instruct-toggle" /><label htmlFor="instruct-toggle" id="instruct-toggle-label"></label>
          <div className="instruct-content"></div>
        </div>
        <div className="entry-recraft" style={style}>
          <span className="recraft-title">How do I Re-Craft?</span>
          <input type="checkbox" id="recraft-toggle" /><label htmlFor="recraft-toggle" id="recraft-toggle-label"></label>
          <div className="recraft-content"></div>
        </div>
      </div>
    );
  }
}

EntryPage.defaultProps = { name: 'Invalid', rating: 0, tags: 1 };

export default EntryPage;
