export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQUestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}
