import React from "react";
import PropTypes from "prop-types";
import styles from "./OldPoll.module.css";
import ProfileCard from "../../profilecard/ProfileCard";
import OldPollContent from "./OldPollContent";

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

OldPoll.propTypes = {
	author: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	optionOne: PropTypes.string.isRequired,
	optionTwo: PropTypes.string.isRequired
};

export default OldPoll;
