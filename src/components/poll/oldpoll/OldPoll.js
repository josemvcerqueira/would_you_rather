import React from "react";
import ProfileCard from "../../profilecard/ProfileCard";
import OldPollContent from "./OldPollContent";
import styles from "./OldPoll.module.css";

const OldPoll = ({ avatar, author, id, optionOne, optionTwo }) => {
	return (
		<div className={styles.container}>
			<ProfileCard avatar={avatar} author={author} subtitle="asks">
				<OldPollContent
					id={id}
					optionOne={optionOne}
					optionTwo={optionTwo}
				/>
			</ProfileCard>
		</div>
	);
};

export default OldPoll;
