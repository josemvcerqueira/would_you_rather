import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { leaderboardScores } from "../../utils/helpers";
import styles from "./Leaderboard.module.css";
import ProfileCard from "../profilecard/ProfileCard";
import LBContent from "./LBContent";

const Leaderboard = ({ data }) => {
	return (
		<div className={styles.margin}>
			{data.map(user => (
				<li className={styles.list} key={user.name}>
					<ProfileCard author={user.name} avatar={user.avatar}>
						<LBContent
							score={user.score}
							winner={user.winner}
							questions={user.numberOfQuestions}
							answers={user.numberOfAnswers}
						/>
					</ProfileCard>
				</li>
			))}
		</div>
	);
};

function mapStateToProps({ users }) {
	return {
		data: leaderboardScores(users)
	};
}

Leaderboard.propTypes = {
	data: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Leaderboard);
