import {
	saveQuestion as saveQuestionAPI,
	saveQuestionAnswer
} from "../utils/api";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_VOTE = "SAVE_VOTE";

export function getQuestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}

export function saveQuestion(question) {
	return {
		type: SAVE_QUESTION,
		question
	};
}

export function saveVote(vote) {
	return {
		type: SAVE_VOTE,
		vote
	};
}

export function handleNewQuestion(question) {
	return dispatch =>
		saveQuestionAPI(question).then(formattedQuestion => {
			dispatch(saveQuestion(formattedQuestion));
		});
}

export function handleSaveVote(vote) {
	return dispatch => {
		dispatch(saveVote(vote));
		saveQuestionAnswer(vote);
	};
}
