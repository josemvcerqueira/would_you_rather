import React, { Component } from "react";
import styles from "./PollResult.module.css";
import ProfileCard from "../profilecard/ProfileCard";
import PollContent from "./PollContent";

class PollResult extends Component {
	render() {
		return (
			<div className={styles.container}>
				<ProfileCard author={"Cloud"} subtitle={"asked"}>
					<PollContent />
				</ProfileCard>
			</div>
		);
	}
}

export default PollResult;
