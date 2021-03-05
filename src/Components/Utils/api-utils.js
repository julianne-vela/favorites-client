import request from 'superagent';
const URL = 'https://shrouded-sea-13120.herokuapp.com';

// USER AUTH //
export async function createUser(email, password) {
	const response = await request
		.post(`${URL}/auth/signup`)
		.send({ email, password });

	return response.body;
}
export async function loginUser(email, password) {
	const response = await request
		.post(`${URL}/auth/signin`)
		.send({ email, password });

	return response.body;
}

const apiURL = 'https://spaceflightnewsapi.net/api/v2';
// https://test.spaceflightnewsapi.net/api/v2/articles?_limit=25&_contains=rover
// SEARCH 3RD PARTY API FOR CONTENT //
export async function getContent(contentType, perPage) {
	const response = await request.get(
		`${apiURL}/${contentType}?_limit=${perPage}`
	);

	return response.body;
}
// ADD NEW BOOKMARK //
export async function addBookmark(token, bookmark) {
	const response = await request
		.post(`${URL}/bookmarks`)
		.set('Authorization', token)
		.send(bookmark);

	return response.body;
}

// REMOVE BOOKMARK //
export async function deleteBookmark(token, bookmarkId) {
	const response = await request
		.delete(`${URL}/api/bookmarks/${bookmarkId}`)
		.set('Authorization', token);

	return response.body;
}

// GET ALL USER BOOKMARKS //
export async function getBookmarks(token) {
	const response = await request
		.get(`${URL}/api/bookmarks/`)
		.set('Authorization', token);

	return response.body;
}

// GET APOD //
export async function getApod() {
	const response = await request.get(`${URL}/apod`);

	return response.body;
}
