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
			//TODO
		};
	},

	searchForItem(item) {
		//TODO
	},

	render() {
		return (
			<div>
	 			<div id = "search">

                 <Search onSearch={this.searchForItem} />

             </div>

			<div id = "images">


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/cardboard.png" className = "topImage"/></a></p>


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/cosmetic.png" className = "topImage"/></a> </p>


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/dishwasher.png" className = "topImage"/></a></p>


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/laundry.png" className = "botImage"/></a></p>


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/shampoo.png" className = "botImage"/></a> </p>


				<p className = "content"> <a href="https://www.google.com.sg/">
				<img src="./resources/images/Categories/spray.png" className = "botImage"/></a></p>


			</div>

			</div>
		);
	}
});


export default PageBody;
