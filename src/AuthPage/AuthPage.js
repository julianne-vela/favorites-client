import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { createUser, loginUser } from '../Components/Utils/api-utils.js';
import './AuthPage.css';
export default class AuthPage extends Component {
	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);

		this.props.history.push('/myaccount/dashboard');
	};
	render() {
		const { token } = this.props;

		return (
			<main className='authPage'>
				{token ? (
					<>
						<section className='login'>
							<h3>Please Sign in to Continue</h3>
							<AuthForm
								auth={loginUser}
								handleFormSubmit={this.handleFormSubmit}
							/>
						</section>
					</>
				) : (
					<>
						<section className='signup'>
							<h3>Create an account!</h3>
							<AuthForm
								auth={createUser}
								handleFormSubmit={this.handleFormSubmit}
							/>
						</section>
					</>
				)}
			</main>
		);
	}
}
