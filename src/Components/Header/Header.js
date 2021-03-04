import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		const { token } = this.props;

		return (
			<header className='header'>
				<h3 className='headerTitle'>AstroNews</h3>
				<nav className='navBar'>
					<NavLink to={'/'}>Home</NavLink>
					{!token ? (
						<>
							<NavLink to={'/myaccount/signup'}>Sign Up</NavLink>
							<NavLink to={'/myaccount/signin'}>Sign In</NavLink>
						</>
					) : (
						<>
							<NavLink to={'/myaccount/dashboard'}></NavLink>
							<NavLink to={'/search'}>Search</NavLink>
							<NavLink to={'/bookmarks'}>Bookmarks</NavLink>
						</>
					)}
					<NavLink to={'/about'}>About</NavLink>
				</nav>
			</header>
		);
	}
}
