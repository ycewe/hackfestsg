import React from 'react';
import Search from './search';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import Connection from './connection';
const API_URL = 'http://localhost:8000/api';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
var update = require('react-addons-update');

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test : [],
      tabs: 1,
      tabText: ['All'],
      tabContent: ['Not found'],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleKeyPress(e) {
    if(e.key === 'Enter')
      this.setState({
        tabs: this.state.tabs+1,
        tabText: this.state.tabText.concat([document.getElementById('search-page-bar').value]),
        tabContent: this.state.tabContent.concat(['Not found']),
      });
  }

  handleClick(e) {
    for (let i=0; i < this.state.tabs; i++) {
      if(document.getElementById("close-tab").name === `${i}`) {
        console.log(i);
        this.setState({
          tabs: this.state.tabs-1,
          tabContent: update(this.state.tabContent, {$splice: [[i, 1]]}),
          tabText: update(this.state.tabText, {$splice: [[i, 1]]}),
        })
      }
    }
  }

  componentDidMount(){
    Connection.get('/').then((response) => {
      console.log(response.data);
      this.setState( {test :response.data});
    });
  }

  render() {
    const style = {
      top: '4rem',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }

    const options = [
      'Highest ratings', 'Most views', 'Most collected', 'Most recent',
    ];

    const searchbarStyle = {
      width: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    }

    const tabStyle = {
      margin: '40px',
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
      <div id="search-page-content" style={style}>
        <div style={searchbarStyle}>
          <input id="search-page-bar" onKeyPress={this.handleKeyPress} placeholder="Additional filters..." />
          <Dropdown options={options} placeholder="Sort by" />
        </div>
        <div style={tabStyle}>
            <Tabs selectedIndex={0}>

              <TabList>
                {tabs}
              </TabList>

              {tabContent}

            </Tabs>
          </div>
      </div>

    );
  }
}

export default SearchPage;
