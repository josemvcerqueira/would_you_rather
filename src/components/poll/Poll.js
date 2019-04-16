import React from "react";
import ProfileCard from "../profilecard/ProfileCard";
import PollContent from "./PollContent";
import styles from "./Poll.module.css";

const Poll = () => {
	return (
		<div className={styles.container}>
			<ProfileCard author="Cloud" subtitle="asks">
				<PollContent />
			</ProfileCard>
		</div>
	);
};

export default Poll;
