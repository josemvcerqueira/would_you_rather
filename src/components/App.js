import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./signin/Signin";
import Home from "./home/Home";
import Leaderboard from "./leaderboard/Leaderboard";
import NavBar from "./navbar/NavBar";
import NewPoll from "./newpoll/NewPoll";
import PollResult from "./pollresult/PollResult";
import Poll from "./poll/Poll";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Fragment>
				{this.props.loading ? null : <Signin />}
				{this.props.navbarLoading ? null : <Poll />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	let loading = true;
	let navbarLoading = true;
	if (users.cloud !== undefined) {
		loading = false;
	}

	if (authedUser !== null) {
		navbarLoading = false;
	}

	return {
		loading,
		navbarLoading
	};
}

export default connect(mapStateToProps)(App);
