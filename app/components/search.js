import React from 'react';
import Search from 'react-search';

class SearchBar extends React.Component {
	getInitialState() {
		return { value: ''};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event){

		event.preventDefault();

		// When the form is submitted, call the onSearch callback that is passed to the component

		this.props.onSearch(this.state.value);

		// Unfocus the text input field
		this.getDOMNode().querySelector('input').blur();
	}

	render() {
		return (
			<Search placeholder='What are you looking for?' />

		);
	}
};

export default SearchBar;
