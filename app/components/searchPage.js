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
    this.state = {
      test : [],
      tabs: 1,
      tabText: ['All'],
      tabContent: [
        <div id = "images">
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


        </div>
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleKeyPress(e) {
    if(e.key === 'Enter')
      this.setState({
        tabs: this.state.tabs+1,
        tabText: this.state.tabText.concat([document.getElementById('search-page-bar').value]),
        tabContent: this.state.tabContent.concat(
        [<div id="images">
            <p className = "content"> <Link to="/entry/2">
            <img src="./resources/images/Entries/1.jpg" className = "topImage"/></Link> </p>


            <p className = "content"> <Link to="/entry/3">
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
      )
    });
  }

  componentDidMount(){
    Connection.get('/').then((response) => {
      console.log(response.data);
      this.setState( {test :response.data});
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
