import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { unAnswered, answered } from "../../utils/helpers";
import ProfileCard from "../profilecard/ProfileCard";
import CardContent from "./CardContent";
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
		const { unansweredData, answeredData } = this.props;
		const { value } = this.state;
		return (
			<div className={styles.width}>
				<AppBar
					className={styles.appbar}
					position="static"
					color="default"
				>
					<Fragment>
						<MuiThemeProvider theme={theme}>
							<Tabs
								value={this.state.value}
								onChange={this.handleChange}
								textColor="secondary"
								indicatorColor="secondary"
								variant="fullWidth"
								className={styles.tabs}
							>
								<Tab label="Unanswered Questions" />
								<Tab label="Answered Questions" />
							</Tabs>
						</MuiThemeProvider>
						{!value &&
							unansweredData.map(obj => (
								<div key={obj.text}>
									<ProfileCard
										avatar={obj.avatar}
										author={obj.author}
									>
										<CardContent text={obj.text} />
									</ProfileCard>
								</div>
							))}
						{!value ||
							answeredData.map(obj => (
								<div key={obj.text}>
									<ProfileCard
										avatar={obj.avatar}
										author={obj.author}
									>
										<CardContent text={obj.text} />
									</ProfileCard>
								</div>
							))}
					</Fragment>
				</AppBar>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	return {
		unansweredData: unAnswered(authedUser, questions, users),
		answeredData: answered(authedUser, questions, users)
	};
}

export default connect(mapStateToProps)(Home);
