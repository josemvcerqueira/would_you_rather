import React from "react";
import styles from "./PollResult.module.css";
import ProfileCard from "../../profilecard/ProfileCard";
import PollContent from "./PollContent";

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
			<ProfileCard author={author} avatar={avatar} subtitle={"asked"}>
				<PollContent
					optionOneText={optionOneText}
					optionTwoText={optionTwoText}
					optionOneVotes={optionOneVotes}
					optionTwoVotes={optionTwoVotes}
				/>
			</ProfileCard>
		</div>
	);
};

export default PollResult;
