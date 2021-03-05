import React, { Component } from 'react';
import TabContent from './Tabs/TabContent';
import TabsBar from './Tabs/TabsBar';
import { loginUser, createUser } from '../Components/Utils/api-utils.js';
import './HomePage.css';

export default class HomePage extends Component {
	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);

		this.props.history.push('/myaccount/dashboard');
	};
	render() {
		const { handleUserChange, routerprops } = this.props;
		return (
			<main className='homePage'>
				<h1>Welcome to AstroNews!</h1>
				<h3>Please login or sign-up below</h3>
				<TabsBar className='accessControls'>
					<content label='login'>
						<TabContent
							label='login'
							auth={loginUser}
							legend='Existing Account'
							handleUserChange={handleUserChange}
							{...routerprops}
							handleFormSubmit={this.handleFormSubmit}
						/>
					</content>

					<content label='signup'>
						<TabContent
							label='signup'
							auth={createUser}
							legend='Create Account'
							handleUserChange={handleUserChange}
							handleFormSubmit={this.handleFormSubmit}
						/>
					</content>
				</TabsBar>
			</main>
		);
	}
}
