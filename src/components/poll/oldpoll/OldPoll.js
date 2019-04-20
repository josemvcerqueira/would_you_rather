import React from "react";
import ProfileCard from "../../profilecard/ProfileCard";
import OldPollContent from "./OldPollContent";
import styles from "./OldPoll.module.css";

const OldPoll = props => {
	return (
		<div className={styles.container}>
			<ProfileCard
				avatar={props.avatar}
				author={props.author}
				subtitle="asks"
			>
				<OldPollContent
					id={props.id}
					optionOne={props.optionOne}
					optionTwo={props.optionTwo}
				/>
			</ProfileCard>
		</div>
	);
};

export default OldPoll;
