import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setLocalStorage } from './Components/Utils/local-utils.js';
import './App.css';
import PrivateRoute from './Components/PrivateRoute.js';
import Header from './Components/Header/Header.js';
import HomePage from './HomePage/HomePage.js';
import AboutPage from './AboutPage/AboutPage.js';
import AuthPage from './AuthPage/AuthPage.js';
import AccountDash from './AccountDash/AccountDash.js';
import SearchPage from './SearchPage/SearchPage.js';
import BookmarksPage from './BookmarksPage/BookmarksPage.js';
export default class App extends Component {
	state = {
		user: {
			name: '',
			token: '',
		},
	};
	handleUserChange = (user) => {
		this.setState({
			user: user,
		});
		setLocalStorage(user);
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
						render={(routerProps) => (
							<AuthPage
								token={token}
								handleUserChange={this.handleUserChange}
								{...routerProps}
							/>
						)}
					/>
					<Route
						path='/myaccount/signin'
						exact
						render={(routerProps) => (
							<AuthPage
								token={token}
								handleUserChange={this.handleUserChange}
								{...routerProps}
							/>
						)}
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

					<Route
						path='/about'
						exact
						render={(routerProps) => <AboutPage {...routerProps} />}
					/>
				</Switch>
			</Router>
		);
	}
}
