import React, { Component } from "react";
import { Paper, LinearProgress, Typography } from "@material-ui/core";
import styles from "./PollContent.module.css";

class PollContent extends Component {
	state = {
		barOne: 20,
		barTwo: 80
	};
	render() {
		const { barOne, barTwo } = this.state;
		return (
			<div className={styles.container}>
				<Typography
					className={styles.title}
					align="center"
					variant="h4"
					component="h2"
				>
					Results
				</Typography>
				<Paper
					className={this.props.first ? styles.paper : styles.winner}
				>
					<Typography
						className={styles.subtitle}
						align="left"
						variant="h4"
						component="h3"
					>
						Would you rather be a javaer
					</Typography>
					<LinearProgress variant="determinate" value={barOne} />
					<Typography
						className={styles.votes}
						align="center"
						variant="h4"
						component="p"
					>
						2 out of 3 votes{" "}
					</Typography>
				</Paper>
				<Paper
					className={
						!this.props.second ? styles.paper : styles.winner
					}
				>
					<Typography
						className={styles.subtitle}
						align="left"
						variant="h4"
						component="h3"
					>
						Would you rather be a javascripter?
					</Typography>
					<LinearProgress variant="determinate" value={barTwo} />
					<Typography
						className={styles.votes}
						align="center"
						variant="h4"
						component="p"
					>
						2 out of 3 votes{" "}
					</Typography>
				</Paper>
			</div>
		);
	}
}

export default PollContent;
