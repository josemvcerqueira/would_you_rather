import React from "react";
import { connect } from "react-redux";
import { leaderboardScores } from "../../utils/helpers";
import styles from "./Leaderboard.module.css";
import ProfileCard from "../profilecard/ProfileCard";
import LBContent from "./LBContent";

const Leaderboard = props => {
	const { data } = props;
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

export default connect(mapStateToProps)(Leaderboard);
