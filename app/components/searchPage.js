import React from 'react';
import Search from './search';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import Connection from './connection';
const API_URL = 'http://localhost:8000/api';



class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test : []
    };
  }


  handleKeyPress(e) {
    if(e.key === 'Enter')
    console.log(document.getElementById('search-page-bar').value);
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
    }

    const options = [
      'Highest ratings', 'Most views', 'Most collected', 'Most recent',
    ];


    return(
      <div id="search-page-content" style={style}>
        <input id="search-page-bar" onKeyPress={this.handleKeyPress} placeholder="Additional filters..." />
        <Dropdown options={options} placeholder="Sort by" />
        {JSON.stringify(this.state.test)}
      </div>

    );
  }
}

export default SearchPage;
