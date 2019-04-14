import React, { Fragment } from "react";
import styles from "./Leaderboard.module.css";
import ProfileCard from "../profilecard/ProfileCard";
import LBContent from "./LBContent";

const Leaderboard = props => {
	return (
		<Fragment>
			<ProfileCard author="Cloud">
				<LBContent />
			</ProfileCard>
		</Fragment>
	);
};

export default Leaderboard;
