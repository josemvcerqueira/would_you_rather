import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar, Tabs, Tab } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styles from "./Home.module.css";

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

class Home extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		return (
			<div className={styles.width}>
				<MuiThemeProvider theme={theme}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							textColor="secondary"
							indicatorColor="secondary"
							variant="fullWidth"
						>
							<Tab label="Unanswered Questions" />
							<Tab label="Answered Questions" />
						</Tabs>
					</AppBar>
				</MuiThemeProvider>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	return {
		users
	};
}

export default connect(mapStateToProps)(Home);
