import React, { Component } from 'react';

export default class TabContent extends Component {
	state = {
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
		const { legend } = this.props;
		return (
			<form className='authForm' onSubmit={this.handleSubmit}>
				<fieldset>
					<legend name={legend}>{legend}</legend>
					<label className='formLabel'>
						<span>Email: </span>
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
						<span>Password: </span>
						<input
							type='password'
							name='password'
							onChange={(e) =>
								this.setState({ password: e.target.value })
							}
							placeholder='Please enter your password'
						/>
					</label>
				</fieldset>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}
