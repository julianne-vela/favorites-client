export const USER = 'USER';

export function getLocalStorage() {
	const rawUser = localStorage.getItem(USER);
	const parsedUser = JSON.parse(rawUser);

	return parsedUser;
}

export function setLocalStorage(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}
