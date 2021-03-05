import React, { Component } from 'react';
import { getApod } from '../Components/Utils/api-utils';
import './AccountDash.css';

export default class AccountDash extends Component {
	state = {
		apod: {},
	};
	componentDidMount = async () => {
		const apod = await getApod();

		this.setState({
			apod: apod,
		});
	};
	render() {
		const { apod } = this.state;
		return (
			<main className='accountDash grid'>
				<h1 className='title'>Welcome! Check out your favorites!</h1>
				<article className='content'>content goes here</article>
				<aside className='sideBar'>
					<content className='apodCard'>
						<h3>NASA Astronomy Picture of the Day</h3>
						<img alt={apod.title} src={`${apod.hdurl}`} />
					</content>
					<content className='astroRes'>
						<h3>Other Astronomy Resources</h3>
					</content>
				</aside>
			</main>
		);
	}
}
