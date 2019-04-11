import { SELECT_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SELECT_AUTHED_USER:
			return action.id;
		default:
			return state;
	}
}
