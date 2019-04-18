import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Paper, LinearProgress, Typography } from "@material-ui/core";
import styles from "./PollResultContent.module.css";

class PollResultContent extends Component {
	state = {
		barOne: 0,
		barTwo: 0
	};

	componentDidMount() {
		const { firstPercentage, secondPercentage } = this.props.data;
		this.setState(() => ({
			barOne: firstPercentage,
			barTwo: secondPercentage
		}));
	}

	handleClick = () => {
		this.props.history.push("/home");
	};

	render() {
		const { barOne, barTwo } = this.state;
		const { handleClick } = this;
		const { optionOneVote, optionTwoVote, totalVotes } = this.props.data;
		const { optionOneText, optionTwoText } = this.props;
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
					className={
						optionOneVote > optionTwoVote
							? styles.winner
							: styles.paper
					}
				>
					<Typography
						className={styles.subtitle}
						align="left"
						variant="h4"
						component="h3"
					>
						{optionOneText}
					</Typography>
					<LinearProgress variant="determinate" value={barOne} />
					<Typography
						className={styles.votes}
						align="center"
						variant="h4"
						component="p"
					>
						{optionOneVote} out of {totalVotes} votes
					</Typography>
				</Paper>
				<Paper
					className={
						optionTwoVote > optionOneVote
							? styles.winner
							: styles.paper
					}
				>
					<Typography
						className={styles.subtitle}
						align="left"
						variant="h4"
						component="h3"
					>
						{optionTwoText}
					</Typography>
					<LinearProgress variant="determinate" value={barTwo} />
					<Typography
						className={styles.votes}
						align="center"
						variant="h4"
						component="p"
					>
						{optionTwoVote} out of {totalVotes} votes
					</Typography>
				</Paper>
				<Button
					className={styles.button}
					variant="contained"
					size="small"
					color="secondary"
					onClick={handleClick}
				>
					Return Home
				</Button>
			</div>
		);
	}
}

export default withRouter(PollResultContent);
