import { saveQuestion as saveQuestionAPI } from "../utils/api";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";

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

export function handleNewQuestion(question) {
	return dispatch => {
		return saveQuestionAPI(question).then(formattedQuestion => {
			dispatch(saveQuestion(formattedQuestion));
		});
	};
}
