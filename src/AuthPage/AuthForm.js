import React, { Component } from 'react';

export default class AuthForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const user = await this.props.auth(
			this.state.email,
			this.state.password
		);
		this.props.handleFormSubmit(user);
	};

	render() {
		return (
			<form className='authForm' onSubmit={this.handleSubmit}>
				<label className='formLabel'>
					<span>Your Name: </span>
					<input
						type='text'
						name='name'
						onChange={(e) =>
							this.setState({ name: e.target.value })
						}
						placeholder='Please enter your name'
					/>
				</label>
				<label className='formLabel'>
					<span>Your Email: </span>
					<input
						type='email'
						name='email'
						onChange={(e) =>
							this.setState({ email: e.target.value })
						}
						placeholder='Please enter your email'
					/>
				</label>
				<label className='formLabel'>
					<span>Choose a password: </span>
					<input
						type='password'
						name='password'
						onChange={(e) =>
							this.setState({ password: e.target.value })
						}
						placeholder='Please enter your password'
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}
