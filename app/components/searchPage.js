import React from 'react';
import Search from './search';
import Dropdown from 'react-dropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import Connection from './connection';
const API_URL = 'http://localhost:8000/api';
import { Link } from 'react-router';
var update = require('react-addons-update');

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    let mainTab = 'All';
      switch(this.props.location.pathname) {
          case '/search/1':
            mainTab = 'Cardboard';
            break;
          case '/search/2':
            mainTab = 'Cosmetic';
            break;
          case '/search/3':
            mainTab = 'Dishwasher';
            break;
          case '/search/4':
          mainTab = 'Detergent';
            break;
          case '/search/5':
            mainTab = 'Shampoo';
              break;
          case '/search/6':
            mainTab = 'Spray';
              break;
    }
    let content = [        <div id = "images">
                <p className = "content">
                <Link to="/entry/1">
                <img src="./resources/images/Entries/1.jpg" className = "topImage"/>
                </Link>
                </p>

                <p className = "content"> <Link to="/entry/2">
                <img src="./resources/images/Entries/2.jpg" className = "topImage"/></Link> </p>

                <p className = "content"> <Link to="/entry/3">
                <img src="./resources/images/Entries/3.jpg" className = "topImage"/></Link></p>


                <p className = "content"> <Link to="/entry/4">
                <img src="./resources/images/Entries/4.jpg" className = "botImage"/></Link></p>


                <p className = "content"> <Link to="/entry/5">
                <img src="./resources/images/Entries/5.jpg" className = "botImage"/></Link> </p>

                <p className = "content"> <Link to="/entry/6">
                <img src="./resources/images/Entries/6.jpg" className = "botImage"/></Link> </p>

                <p className = "content"> <Link to="/entry/7">
                <img src="./resources/images/Entries/7.jpg" className = "botImage"/></Link> </p>

                <p className = "content"> <Link to="/entry/8">
                <img src="./resources/images/Entries/8.jpg" className = "botImage"/></Link> </p>

            </div>]
            switch(mainTab) {
              case 'Spray':
                content = [<div id="images">
                  <p className = "content"> <Link to="/entry/3">
                  <img src="./resources/images/Entries/3.jpg" className = "topImage"/></Link></p>

                  <p className = "content"> <Link to="/entry/8">
                  <img src="./resources/images/Entries/8.jpg" className = "botImage"/></Link> </p></div>
                ];
                break;
              case 'All':
                break;
              case 'Detergent':
                content = [
                  <div id = "images">
                              <p className = "content">
                              <Link to="/entry/1">
                              <img src="./resources/images/Entries/1.jpg" className = "topImage"/>
                              </Link>
                              </p>

                              <p className = "content"> <Link to="/entry/2">
                              <img src="./resources/images/Entries/2.jpg" className = "topImage"/></Link> </p>


                              <p className = "content"> <Link to="/entry/4">
                              <img src="./resources/images/Entries/4.jpg" className = "botImage"/></Link></p>


                              <p className = "content"> <Link to="/entry/5">
                              <img src="./resources/images/Entries/5.jpg" className = "botImage"/></Link> </p>

                              <p className = "content"> <Link to="/entry/6">
                              <img src="./resources/images/Entries/6.jpg" className = "botImage"/></Link> </p>

                              <p className = "content"> <Link to="/entry/7">
                              <img src="./resources/images/Entries/7.jpg" className = "botImage"/></Link> </p>

                          </div>
                ]
                break;
              default:
                content = 'Not Found';
            }

    this.state = {
      test : [],
      tabs: 1,
      tabText: [mainTab],
      tabContent: [
        content
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleKeyPress(e) {
    if(e.key === 'Enter')
      if (document.getElementById('search-page-bar').value == 'detergent')
      this.setState({
        tabs: this.state.tabs+1,
        tabText: this.state.tabText.concat([document.getElementById('search-page-bar').value]),
        tabContent: this.state.tabContent.concat(
        [<div id="images">
            <p className = "content"> <Link to="/entry/1">
            <img src="./resources/images/Entries/1.jpg" className = "topImage"/></Link> </p>


            <p className = "content"> <Link to="/entry/2">
            <img src="./resources/images/Entries/2.jpg" className = "topImage"/></Link></p>


            <p className = "content"> <Link to="/entry/4">
            <img src="./resources/images/Entries/4.jpg" className = "botImage"/></Link></p>


            <p className = "content"> <Link to="/entry/5">
            <img src="./resources/images/Entries/5.jpg" className = "botImage"/></Link> </p>

            <p className = "content"> <Link to="/entry/6">
            <img src="./resources/images/Entries/6.jpg" className = "botImage"/></Link> </p>

            <p className = "content"> <Link to="/entry/7">
            <img src="./resources/images/Entries/7.jpg" className = "botImage"/></Link> </p>

          </div>]
      )});

    else if (document.getElementById('search-page-bar').value.toLowerCase() == 'spray')
      this.setState({
        tabs: this.state.tabs+1,
        tabText: this.state.tabText.concat([document.getElementById('search-page-bar').value]),
        tabContent: this.state.tabContent.concat(
        [<div id="images">
            <p className = "content"> <Link to="/entry/3">
            <img src="./resources/images/Entries/3.jpg" className = "topImage"/></Link> </p>


            <p className = "content"> <Link to="/entry/8">
            <img src="./resources/images/Entries/8.jpg" className = "topImage"/></Link></p>
          </div>]
      )});

    else
      this.setState({
        tabs: this.state.tabs+1,
        tabText: this.state.tabText.concat([document.getElementById('search-page-bar').value]),
        tabContent: this.state.tabContent.concat(['No Matches Found!'])
    });
  }

  componentDidMount(){
    Connection.get('/').then((response) => {
      console.log(response.data);
      this.setState( {test: response.data});
    });
  }

  handleClick(e) {
    for (let i=0; i < this.state.tabs; i++) {
      if(document.getElementById("close-tab").name === `${i}`) {
        this.setState({
          tabs: this.state.tabs-1,
          tabContent: update(this.state.tabContent, {$splice: [[i, 1]]}),
          tabText: update(this.state.tabText, {$splice: [[i, 1]]}),
        })
      }
      
    }
  }

  render() {
    const style = {
      top: '4rem',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    }

    const options = [
      'Highest ratings', 'Most views', 'Most collected', 'Most recent',
    ];

    const tabStyle = {
      position: 'relative',
      top: '5rem',
      margin: '20px',
    }

    let tabs = []
    for (let i=0; i < this.state.tabs; i++) {
        tabs.push(<Tab>{this.state.tabText[i]}
          <button id="close-tab" name={i} onClick={this.handleClick}>&#10060;</button>
          </Tab>);
    }

    let tabContent = []
    for (let i=0; i < this.state.tabs; i++) {
        tabContent.push(<TabPanel><p>{this.state.tabContent[i]}</p></TabPanel>);
    }

    return(

      <div>
      {
        <div>
        <div id="search-page-content" style={style}>
        <input id="search-page-bar" onKeyPress={this.handleKeyPress} placeholder="Additional filters..." />

        <Dropdown options={options} placeholder="Sort by" />
        </div>
        <div style={tabStyle}>
        <Tabs
        selectedIndex={0}
        >
        <TabList>
          {tabs}
        </TabList>

        {tabContent}
      </Tabs>
      </div>
      </div>

      }
      </div>
    );
  }
}

export default SearchPage;
