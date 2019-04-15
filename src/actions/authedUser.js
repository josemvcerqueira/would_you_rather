export const SELECT_AUTHED_USER = " SELECT_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

function selectAuthedUser(id) {
	return {
		type: SELECT_AUTHED_USER,
		id
	};
}

function removeAuthedUser(value) {
	return {
		type: REMOVE_AUTHED_USER,
		value
	};
}

export function handleLogout(value) {
	return dispatch => {
		dispatch(removeAuthedUser(value));
	};
}

export function handleAuthedUser(id) {
	return dispatch => {
		dispatch(selectAuthedUser(id));
	};
}
