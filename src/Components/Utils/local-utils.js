export const USER = 'USER';

export function getLocalStorage() {
	const rawUser = localStorage.getItem(USER);
	try {
		return JSON.parse(rawUser);
	} catch (e) {
		return {
			email: 'tempuser@temp.com',
			id: '0',
			token: 'tempusertoken',
		};
	}
}
export function setLocalStorage(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}
