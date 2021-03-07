import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	getLocalStorage,
	setLocalStorage,
} from './Components/Utils/local-utils.js';
import './App.css';
import PrivateRoute from './Components/PrivateRoute.js';
import Header from './Components/Header/Header.js';
import HomePage from './HomePage/HomePage.js';
import AboutPage from './AboutPage/AboutPage.js';
import AccountDash from './AccountDash/AccountDash.js';
import SearchPage from './SearchPage/SearchPage.js';
import BookmarksPage from './BookmarksPage/BookmarksPage.js';
export default class App extends Component {
	state = {
		user: getLocalStorage(),
		token: '',
	};

	componentDidMount = () => {
		setLocalStorage({
			user: {
				email: '',
				id: '',
				token: '',
			},
		});
	};

	handleUserChange = (user) => {
		this.setState({
			user: user,
		});
		setLocalStorage(user);
	};

	handleLogout = () => {
		localStorage.clear();
		// this.setState({
		// 	user: {
		// 		email: '',
		// 		id: '',
		// 		token: '',
		// 	},
		// });
	};

	render() {
		const { user, token } = this.state;

		return (
			<div className='App'>
				<Router>
					<Header user={user} handleLogout={this.handleLogout} />
					<Switch>
						<Route
							path='/'
							exact
							render={(routerProps) => (
								<HomePage
									token={token}
									handleUserChange={this.handleUserChange}
									{...routerProps}
								/>
							)}
						/>

						<PrivateRoute
							path='/myaccount/dashboard'
							exact
							token={token}
							render={(routerProps) => (
								<AccountDash user={user} {...routerProps} />
							)}
						/>

						<PrivateRoute
							path='/search'
							exact
							token={token}
							render={(routerProps) => (
								<SearchPage user={user} {...routerProps} />
							)}
						/>

						<PrivateRoute
							path='/bookmarks'
							exact
							token={token}
							render={(routerProps) => (
								<BookmarksPage user={user} {...routerProps} />
							)}
						/>

						<Route
							path='/about'
							exact
							render={(routerProps) => (
								<AboutPage {...routerProps} />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
