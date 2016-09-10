import React from 'react';
import Slider from 'react-slick';

class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="app-header">
          <div></div>
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
