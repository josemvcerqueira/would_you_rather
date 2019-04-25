import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { answered, unAnswered } from "../../utils/helpers";
import PollResult from "./pollresult/PollResult";
import OldPoll from "./oldpoll/OldPoll";

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

	return <Redirect to="/error" />;
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

Poll.propTypes = {
	answeredData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	unansweredData: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps)(Poll));
