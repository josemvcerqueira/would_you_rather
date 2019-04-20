import { GET_USERS } from "../actions/users";
import { SAVE_QUESTION, SAVE_VOTE } from "../actions/questions";

export default function users(state = {}, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users
			};
		case SAVE_QUESTION:
			const { question } = action;
			return {
				...state,
				[question.author]: {
					...state[question.author],
					questions: state[question.author].questions.concat([
						question.id
					])
				}
			};
		case SAVE_VOTE:
			const { authedUser, qid, answer } = action.vote;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};
		default:
			return state;
	}
}
