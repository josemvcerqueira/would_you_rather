import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PollResult from "./pollresult/PollResult";
import OldPoll from "./oldpoll/OldPoll";
import { answered, unAnswered } from "../../utils/helpers";

const Poll = ({ answeredData, unansweredData }) => {
	if (unansweredData.length) {
		return (
			<OldPoll
				id={unansweredData[0].id}
				author={unansweredData[0].author}
				optionOne={unansweredData[0].optionOne}
				optionTwo={unansweredData[0].optionTwo}
				avatar={unansweredData[0].avatar}
			/>
		);
	}

	if (answeredData.length) {
		return (
			<PollResult
				author={answeredData[0].author}
				avatar={answeredData[0].avatar}
				optionOneText={answeredData[0].optionOneText}
				optionTwoText={answeredData[0].optionTwoText}
				optionOneVotes={answeredData[0].optionOneVotes}
				optionTwoVotes={answeredData[0].optionTwoVotes}
			/>
		);
	}
};

function mapStateToProps({ users, authedUser, questions }, { match }) {
	const { id } = match.params;
	const answeredArr = answered(authedUser, questions, users);
	const unansweredArr = unAnswered(authedUser, questions, users);

	const answeredData = answeredArr.filter(obj => obj.id === id);
	const unansweredData = unansweredArr.filter(obj => obj.id === id);

	return {
		answeredData,
		unansweredData
	};
}

export default withRouter(connect(mapStateToProps)(Poll));
