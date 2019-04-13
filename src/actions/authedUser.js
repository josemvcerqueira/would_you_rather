export const SELECT_AUTHED_USER = " SELECT_AUTHED_USER";

function selectAuthedUser(id) {
	return {
		type: SELECT_AUTHED_USER,
		id
	};
}

export function handleAuthedUser(id) {
	return dispatch => {
		dispatch(selectAuthedUser(id));
	};
}
