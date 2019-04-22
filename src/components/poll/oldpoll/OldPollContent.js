import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleSaveVote } from "../../../actions/questions";
import {
	Button,
	createMuiTheme,
	FormControl,
	FormLabel,
	RadioGroup,
	MuiThemeProvider,
	FormControlLabel,
	Radio
} from "@material-ui/core";
import styles from "./OldPollContent.module.css";

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: "rgb(58, 50, 118)"
		}
	},
	typography: {
		useNextVariants: true
	}
});

class OldPollContent extends Component {
	state = {
		value: ""
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = () => {
		let answer;
		if (this.state.value === this.props.optionOne) {
			answer = "optionOne";
		} else {
			answer = "optionTwo";
		}
		const vote = {
			authedUser: this.props.authedUser,
			qid: this.props.id,
			answer
		};
		this.props.dispatch(handleSaveVote(vote));
	};

	render() {
		const { handleSubmit, handleChange, state } = this;
		const { optionOne, optionTwo } = this.props;
		return (
			<div className={styles.container}>
				<FormControl component="fieldset">
					<FormLabel className={styles.title} component="legend">
						Would you rather ...
					</FormLabel>
					<RadioGroup
						aria-label="Would you rather ..."
						name="would you rather"
						value={state.value}
						onChange={handleChange}
					>
						<FormControlLabel
							value={optionOne}
							control={<Radio color="secondary" />}
							label={optionOne}
						/>
						<FormControlLabel
							value={optionTwo}
							control={<Radio color="secondary" />}
							label={optionTwo}
						/>
					</RadioGroup>
				</FormControl>
				<MuiThemeProvider theme={theme}>
					<Button
						className={styles.button}
						variant="contained"
						size="small"
						color="secondary"
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</MuiThemeProvider>
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	};
}

OldPollContent.propTypes = {
	authedUser: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	optionOne: PropTypes.string.isRequired,
	optionTwo: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(OldPollContent);
