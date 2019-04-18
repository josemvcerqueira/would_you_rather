import React from "react";
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
			<ProfileCard author={author} avatar={avatar} subtitle={"asked"}>
				<PollResultContent
					data={handleVotes(optionOneVotes, optionTwoVotes)}
					optionOneText={optionOneText}
					optionTwoText={optionTwoText}
				/>
			</ProfileCard>
		</div>
	);
};

export default PollResult;
