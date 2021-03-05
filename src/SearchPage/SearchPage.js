import React, { Component } from 'react';
import './SearchPage.css';
import { getContent } from '../Components/Utils/api-utils';
import { getLocalStorage } from '../Components/Utils/local-utils';

export default class SearchPage extends Component {
	state = {
		user: getLocalStorage(),
		articles: [],
		bookmarks: [],
		query: '',
		type: 'articles',
		perPage: 25,
	};

	componentDidMount = async () => {
		const articles = await getContent(
			this.state.type,
			this.state.perPage,
			this.state.query
		);

		this.setState({ articles });
	};

	render() {
		const { articles } = this.state;
		return (
			<main className='searchPage'>
				<h1 className='sTitle'>Browse Recent Articles</h1>
				<aside className='sideBar'>
					<div>Content Type</div>
					<div>Search</div>
					<div>Per Page</div>
				</aside>
				<section className='articles'>
					{articles.map((article, i) => (
						<article
							key={`${article.title}-${i}`}
							className='articleContainer'>
							<h3>{article.title}</h3>
							<img alt={article.title} src={article.imageUrl} />
							<p>{article.summary}</p>
							<a href={`${article.url}`}>
								Read full article here at {article.newsSite}.
							</a>
							<button className='bookmarkBtn'>
								Add to your Bookmarks
							</button>
						</article>
					))}
				</section>
			</main>
		);
	}
}
