import { SELECT_AUTHED_USER } from "../actions/authedUser";
import { REMOVE_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SELECT_AUTHED_USER:
			return action.id;
		case REMOVE_AUTHED_USER:
			return action.value;
		default:
			return state;
	}
}
