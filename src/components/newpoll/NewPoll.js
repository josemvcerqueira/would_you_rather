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
		const { authedUser, dispatch } = this.props;
		const question = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		};

		dispatch(handleNewQuestion(question)).then(
			this.setState(() => ({
				optionOne: "",
				optionTwo: ""
			}))
		);
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
						onChange={event => handleOptionTwo(event.target.value)}
						value={optionTwo}
						className={styles.input}
					/>
				</FormControl>
				<div className={styles.center}>
					<Button
						onClick={event => handleSubmit(event)}
						className={styles.btn}
						variant="contained"
					>
						<Typography
							align="center"
							variant="button"
							component="p"
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

export default connect(mapStateToProps)(NewPoll);
