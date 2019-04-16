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

export function leaderboardScores(users) {
	const usersArr = Reflect.ownKeys(users);
	const avatars = usersArr.map(user => users[user].avatarURL);
	const names = usersArr.map(user => users[user].name);
	const numberOfAnswers = usersArr.map(
		user => Reflect.ownKeys(users[user].answers).length
	);
	const numberOfQuestions = usersArr.map(
		user => users[user].questions.length
	);

	const scores = numberOfAnswers.map(
		(answers, index) => answers + numberOfQuestions[index]
	);

	const highestScore = Math.max(...scores);

	function reducer(highestScore) {
		return function(acc, score) {
			if (score === highestScore) {
				acc.push(true);
			} else {
				acc.push(false);
			}
			return acc;
		};
	}
	const winners = scores.reduce(reducer(highestScore), []);

	let arr = [];

	for (let i = 0; i < usersArr.length; i++) {
		arr.push({
			avatar: avatars[i],
			name: names[i],
			numberOfAnswers: numberOfAnswers[i],
			numberOfQuestions: numberOfQuestions[i],
			score: scores[i],
			winner: winners[i]
		});
	}

	arr.sort((a, b) => b.score - a.score);

	return arr;
}

export function handleLocation(location) {
	let result;

	if (location.pathname === "/home") return (result = 0);
	else if (location.pathname === "/newquestion") return (result = 1);
	else if (location.pathname === "/leaderboard") return (result = 2);

	return result;
}
