import { GET_QUESTIONS, SAVE_QUESTION, SAVE_VOTE } from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case SAVE_QUESTION:
			const { question } = action;
			return {
				...state,
				[question.id]: question
			};
		case SAVE_VOTE:
			const { authedUser, qid, answer } = action.vote;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};
		default:
			return state;
	}
}
