import React from 'react';
import Search from './search';
import Auth from './auth';
import firebaseModel from '../firebase-model';

// const PageBody = ()=> (
// 	<div id ="app-body">
// 		<p>Hello</p>
// 	</div>

// );

class PageBody extends React.Component {
	constructor(props) {
    super(props);
    this.state = { user: firebaseModel.getUser() };
    this.processUser = this.processUser.bind(this);
  }

  componentWillMount() {
    firebaseModel.onAuthStateChanged(this.processUser);
    this.processUser(firebaseModel.getUser());
  }

  processUser(authed) {
    this.setState({ user: authed });
  }

	getInitialState() {
		return {
			//TODO
		};
	}

	searchForItem(item) {
		//TODO
	}

	render() {
		return (
			<div>
			{
				(this.state.user) ?
					<div>
					<div id ="pagetitle">
	          <li>Home</li>
	        </div>
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
					</div></div> :
					<Auth type="signin" />
			}
			</div>
		);
	}
};


export default PageBody;
