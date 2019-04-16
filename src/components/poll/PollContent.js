import React, { Component } from "react";
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
import styles from "./PollContent.module.css";

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

class PollContent extends Component {
	state = {
		value: ""
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<div className={styles.container}>
				<FormControl component="fieldset">
					<FormLabel className={styles.title} component="legend">
						Would you rather ...
					</FormLabel>
					<RadioGroup
						aria-label="Would you rather ..."
						name="would you rather"
						value={this.state.value}
						onChange={this.handleChange}
					>
						<FormControlLabel
							value="be a JS dev"
							control={<Radio color="secondary" />}
							label="be a JS dev"
						/>
						<FormControlLabel
							value="be a JAVA dev"
							control={<Radio color="secondary" />}
							label="be a JAVA dev"
						/>
					</RadioGroup>
				</FormControl>
				<MuiThemeProvider theme={theme}>
					<Button
						className={styles.button}
						variant="contained"
						size="small"
						color="secondary"
					>
						Submit
					</Button>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default PollContent;
