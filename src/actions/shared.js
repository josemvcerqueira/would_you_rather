import { getInitialData } from "../utils/_DATA";
import { getUsers } from "./users";
import { getQUestions } from "./questions";

export function handleInitialData() {
	return dispatch => {
		return getInitialData().then(({ users, questions }) => {
			dispatch(getUsers(users));
			dispatch(getQUestions(questions));
		});
	};
}
