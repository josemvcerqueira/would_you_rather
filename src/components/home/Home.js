import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { unAnswered, answered } from "../../utils/helpers";
import { AppBar, Tabs, Tab } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styles from "./Home.module.css";
import ProfileCard from "../profilecard/ProfileCard";
import HomeContent from "./HomeContent";

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
								<div key={obj.id}>
									<ProfileCard
										avatar={obj.avatar}
										author={obj.author}
										subtitle="asks:"
									>
										<HomeContent
											id={obj.id}
											text={obj.text}
										/>
									</ProfileCard>
								</div>
							))}
						{!value ||
							answeredData.map(obj => (
								<div key={obj.id}>
									<ProfileCard
										avatar={obj.avatar}
										author={obj.author}
										subtitle="asks:"
									>
										<HomeContent
											id={obj.id}
											text={obj.text}
										/>
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

Home.propTypes = {
	answeredData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	unansweredData: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Home);
