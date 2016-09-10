import React from 'react';
import Search from './search';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import Connection from './connection';
const API_URL = 'http://localhost:8000/api';
import { Link } from 'react-router';



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

  /*createItems(items) {
    var output = [];

    items.map(function(item){
         output.push(<li>{item._id}</li>);

    })
    return output;

  }*/

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

      <div>
      {
        <div>
        <div id="search-page-content" style={style}>
        <input id="search-page-bar" onKeyPress={this.handleKeyPress} placeholder="Additional filters..." />

        <Dropdown options={options} placeholder="Sort by" />
        </div>

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


        </div></div>

      }
      </div>
    );
  }
}

export default SearchPage;
