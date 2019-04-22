import React from "react";
import PropTypes from "prop-types";
import styles from "./PollResult.module.css";
import { handleVotes } from "../../../utils/helpers";
import ProfileCard from "../../profilecard/ProfileCard";
import PollResultContent from "./PollResultContent";

const PollResult = ({
	author,
	avatar,
	optionOneText,
	optionTwoText,
	optionOneVotes,
	optionTwoVotes
}) => {
	return (
		<div className={styles.container}>
			<ProfileCard author={author} avatar={avatar} subtitle="asked">
				<PollResultContent
					data={handleVotes(optionOneVotes, optionTwoVotes)}
					optionOneText={optionOneText}
					optionTwoText={optionTwoText}
				/>
			</ProfileCard>
		</div>
	);
};

PollResult.propTypes = {
	author: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	optionOneText: PropTypes.string.isRequired,
	optionOneVotes: PropTypes.number.isRequired,
	optionTwoText: PropTypes.string.isRequired,
	optionTwoVotes: PropTypes.number.isRequired
};

export default PollResult;
