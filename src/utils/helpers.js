function generateUID() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
}

function randomOption(x, y) {
	const result = Math.random() < 0.5;
	return result >= 0.5 ? x : y;
}

function capitalize(string) {
	if (typeof string !== "string") return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText
		},
		optionTwo: {
			votes: [],
			text: optionTwoText
		}
	};
}

export function unAnswered(authedUser, questions, users) {
	const questionsIds = Reflect.ownKeys(questions);
	const answeredIds = Reflect.ownKeys(users[authedUser].answers);
	const unansweredIds = questionsIds.filter(
		question => answeredIds.indexOf(question) === -1
	);
	const unansweredAuthors = unansweredIds.map(id => questions[id].author);
	const unansweredText = unansweredIds.map(
		id => questions[id][randomOption("optionOne", "optionTwo")].text
	);
	const unsAuthorsAvatars = unansweredAuthors.map(
		name => users[name].avatarURL
	);

	let arr = [];

	for (let i = 0; i < unansweredIds.length; i++) {
		arr.push({
			avatar: unsAuthorsAvatars[i],
			text: unansweredText[i],
			author: capitalize(unansweredAuthors[i])
		});
	}

	return arr;
}

export function answered(authedUser, questions, users) {
	const answeredIds = Reflect.ownKeys(users[authedUser].answers);
	const answeredAuthors = answeredIds.map(id => questions[id].author);
	const answeredText = answeredIds.map(
		id => questions[id][randomOption("optionOne", "optionTwo")].text
	);

	const answeredAvatars = answeredAuthors.map(
		author => users[author].avatarURL
	);

	let arr = [];

	for (let i = 0; i < answeredIds.length; i++) {
		arr.push({
			avatar: answeredAvatars[i],
			text: answeredText[i],
			author: capitalize(answeredAuthors[i])
		});
	}

	return arr;
}
