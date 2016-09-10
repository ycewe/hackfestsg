import React from 'react';
import Search from './search';
import Dropdown from 'react-dropdown';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      string: ''
    });
  }

  handleKeyPress(e) {
    if(e.key === 'Enter')
    console.log(document.getElementById('search-page-bar').value);
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
      </div>
    );
  }
}

export default SearchPage;
