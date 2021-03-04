export const USER = 'USER';

export function getLocalStorage() {
	const rawUser = localStorage.getItem(USER);
	try {
		return JSON.parse(rawUser);
	} catch (e) {
		return {
			email: '',
			id: '',
			token: '',
		};
	}
}
export function setLocalStorage(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}
