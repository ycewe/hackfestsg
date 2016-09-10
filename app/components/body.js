import React from 'react';
import HomePage from './homePage';

// const PageBody = ()=> (
// 	<div id ="app-body">
// 		<p>Hello</p>
// 	</div>

// );

class PageBody extends React.Component {
	render() {
		return(
			<div>
				{this.props.children}
			</div>
		);
	}
};


export default PageBody;
