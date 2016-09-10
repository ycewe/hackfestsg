import React from 'react';
import Search from './search.js';

// const PageBody = ()=> (
// 	<div id ="app-body">
// 		<p>Hello</p>
// 	</div>

// );

var PageBody = React.createClass( {
	getInitialState() {
		return {

		};
	},

	searchForItem(item) {

	},

	render() {
		return (
			<div id = "search">

				<Search onSearch={this.searchForItem} />

			</div>
		);
	}
});


export default PageBody;

