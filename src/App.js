import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	getLocalStorage,
	setLocalStorage,
} from './Components/Utils/ls-utils.js';
import './App.css';
import PrivateRoute from './Components/PrivateRoute.js';
import Header from './Components/Header/Header.js';
import HomePage from './HomePage/HomePage.js';
import AuthPage from './AuthPage/AuthPage.js';
import AccountDash from './AccountDash/AccountDash.js';
import SearchPage from './SearchPage/SearchPage.js';
import BookmarksPage from './BookmarksPage/BookmarksPage.js';
export default class App extends Component {
	state = {
		token: getLocalStorage(),
	};

	handleTokenChange = (token) => {
		this.setState({ token });

		setLocalStorage(token);
	};

	render() {
		const { token } = this.state;

		return (
			<Router>
				<Header />
				<Switch>
					<Route
						path='/'
						exact
						token={token}
						render={(routerProps) => <HomePage {...routerProps} />}
					/>

					<PrivateRoute
						path='/myaccount/dashboard'
						exact
						token={token}
						render={(routerProps) => (
							<AccountDash {...routerProps} />
						)}
					/>

					<Route
						path='/myaccount/signup'
						exact
						token={token}
						render={(routerProps) => <AuthPage {...routerProps} />}
					/>
					<Route
						path='/myaccount/signin'
						exact
						token={token}
						render={(routerProps) => <AuthPage {...routerProps} />}
					/>

					<PrivateRoute
						path='/search'
						exact
						token={token}
						render={(routerProps) => (
							<SearchPage {...routerProps} />
						)}
					/>

					<PrivateRoute
						path='/bookmarks'
						exact
						token={token}
						render={(routerProps) => (
							<BookmarksPage {...routerProps} />
						)}
					/>
				</Switch>
			</Router>
		);
	}
}
