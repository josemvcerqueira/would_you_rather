import React, { Component } from "react";
import {
	Button,
	Divider,
	FormControl,
	Input,
	InputLabel,
	Paper,
	Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleNewQuestion } from "../../actions/questions";
import styles from "./NewPoll.module.css";

class NewPoll extends Component {
	state = {
		optionOne: "",
		optionTwo: ""
	};

	handleOptionOne = value => {
		this.setState(() => ({
			optionOne: value
		}));
	};

	handleOptionTwo = value => {
		this.setState(() => ({
			optionTwo: value
		}));
	};

	handleSubmit = event => {
		event.preventDefault();
		const { optionOne, optionTwo } = this.state;
		const { authedUser, dispatch, history } = this.props;
		const question = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		};

		if (!question.optionOneText || !question.optionTwoText) return;
		if (question.optionOneText === question.optionTwoText) return;

		dispatch(handleNewQuestion(question)).then(
			this.setState(() => ({
				optionOne: "",
				optionTwo: ""
			}))
		);
		history.push("/home");
	};

	render() {
		const { optionOne, optionTwo } = this.state;
		const { handleOptionOne, handleOptionTwo, handleSubmit } = this;
		return (
			<Paper className={styles.container}>
				<Typography
					align="center"
					variant="h4"
					component="h2"
					className={styles.title}
				>
					New Question
				</Typography>
				<Divider variant="middle" />
				<Typography
					align="left"
					variant="h4"
					component="h3"
					className={styles.subtitle}
				>
					Complete the question:
				</Typography>
				<Typography
					align="left"
					variant="h4"
					component="h4"
					className={styles.question}
				>
					Would You rather?
				</Typography>
				<FormControl>
					<InputLabel>Option One</InputLabel>
					<Input
						required={true}
						onChange={event => handleOptionOne(event.target.value)}
						value={optionOne}
						className={styles.input}
					/>
				</FormControl>
				<div className={styles.relative}>
					<Divider className={styles.dividerRight} absolute={true} />
					<Typography
						align="center"
						variant="h4"
						component="h4"
						className={styles.or}
					>
						or
					</Typography>
					<Divider className={styles.dividerLeft} absolute={true} />
				</div>
				<FormControl>
					<InputLabel>Option Two</InputLabel>
					<Input
						required={true}
						onChange={event => handleOptionTwo(event.target.value)}
						value={optionTwo}
						className={styles.input}
					/>
				</FormControl>
				<div className={styles.btnContainer}>
					<Button
						onClick={event => handleSubmit(event)}
						className={styles.btn}
					>
						<Typography
							align="center"
							variant="button"
							className={styles.btn__text}
						>
							Submit
						</Typography>
					</Button>
				</div>
			</Paper>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	};
}

NewPoll.propTypes = {
	authedUser: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withRouter(NewPoll));
