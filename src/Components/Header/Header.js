import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		const { user, handleLogout } = this.props;

		return (
			<header className='header'>
				<h3 className='headerTitle'>AstroNews</h3>
				<nav className='navBar'>
					{user && user.token ? (
						<>
							<NavLink to={'/myaccount/dashboard'}>
								My Account
							</NavLink>
							<NavLink to={'/bookmarks'}>Bookmarks</NavLink>
							<button onClick={handleLogout}>Logout</button>
						</>
					) : (
						(!user || !user.token) && (
							<>
								<NavLink to={'/'}>Home</NavLink>
								<NavLink to={'/search'}>Search</NavLink>
								<NavLink to={'/about'}>About</NavLink>
							</>
						)
					)}
				</nav>
			</header>
		);
	}
}
