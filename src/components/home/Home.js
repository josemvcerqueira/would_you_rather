import React, { Component } from "react";
import { connect } from "react-redux";
import { randomOption } from "../../utils/helpers";
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
		const { arr } = this.props;
		console.log(arr);
		return (
			<div className={styles.width}>
				<MuiThemeProvider theme={theme}>
					<AppBar
						className={styles.appbar}
						position="static"
						color="default"
					>
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
						{arr.map(obj => (
							<div key={obj.text}>
								<ProfileCard
									avatar={obj.avatar}
									author={obj.author}
								>
									<CardContent text={obj.text} />
								</ProfileCard>
							</div>
						))}
					</AppBar>
				</MuiThemeProvider>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const questionsIds = Reflect.ownKeys(questions);
	const answeredIds = Reflect.ownKeys(users[authedUser].answers);
	const unansweredIds = questionsIds.filter(
		question => answeredIds.indexOf(question) === -1
	);
	const unansweredAuthors = unansweredIds.map(id => questions[id].author);
	const unansweredText = unansweredIds.map(
		id => questions[id][randomOption("optionOne", "optionTwo")].text
	);
	const unsAuthorsAvatars = unansweredAuthors.map(
		name => users[name].avatarURL
	);

	let arr = [];

	for (let i = 0; i < unansweredIds.length; i++) {
		arr.push({
			avatar: unsAuthorsAvatars[i],
			text: unansweredText[i],
			author: unansweredAuthors[i]
		});
	}

	return {
		arr
	};
}

export default connect(mapStateToProps)(Home);
