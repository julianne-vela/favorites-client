import React, { Component } from 'react';
import './SearchPage.css';
import {
	addBookmark,
	getBookmarks,
	getContent,
} from '../Components/Utils/api-utils';
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

	handleBookmark = async (article) => {
		await addBookmark(this.props.token, article);
		const bookmarks = await getBookmarks(this.props.token);
		this.setState({ bookmarks });
	};

	checkBookmarks = (article) => {
		if (!this.props.token) return true;

		const bookmarked = this.state.bookmarks.find(
			(bookmark) => bookmark.article_id === article.id
		);

		return Boolean(bookmarked);
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
							{this.checkBookmarks(article) ? (
								<p>
									<em>Already Bookmarked!</em>
								</p>
							) : (
								<button
									className='bookmarkBtn'
									onClick={() =>
										this.handleBookmark(article)
									}>
									Add to your Bookmarks
								</button>
							)}
						</article>
					))}
				</section>
			</main>
		);
	}
}
