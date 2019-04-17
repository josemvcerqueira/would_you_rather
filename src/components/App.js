import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./signin/Signin";
import Home from "./home/Home";
import Leaderboard from "./leaderboard/Leaderboard";
import NavBar from "./navbar/NavBar";
import NewPoll from "./newpoll/NewPoll";
import Poll from "./poll/Poll";
import ErrorPage from "./errorpage/ErrorPage";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		const { initialData, authedUser } = this.props;
		return (
			<BrowserRouter>
				{initialData ? null : (
					<Switch>
						<Route exact path="/" component={Signin} />
						<Route
							path="/home"
							render={() =>
								authedUser ? (
									<Redirect exact to="/" />
								) : (
									<Fragment>
										<NavBar />
										<Home />
									</Fragment>
								)
							}
						/>
						<Route
							path="/poll/:id"
							render={() =>
								authedUser ? (
									<Redirect exact to="/" />
								) : (
									<Fragment>
										<NavBar />
										<Poll />
									</Fragment>
								)
							}
						/>
						<Route
							path="/newquestion"
							render={() =>
								authedUser ? (
									<Redirect exact to="/" />
								) : (
									<Fragment>
										<NavBar />
										<NewPoll />
									</Fragment>
								)
							}
						/>
						<Route
							path="/leaderboard"
							render={() =>
								authedUser ? (
									<Redirect exact to="/" />
								) : (
									<Fragment>
										<NavBar />
										<Leaderboard />
									</Fragment>
								)
							}
						/>
						<Route component={ErrorPage} />
						/>
					</Switch>
				)}
			</BrowserRouter>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	function isEmpty(obj) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}
		return true;
	}
	const initialData = isEmpty(users);

	return {
		initialData,
		authedUser: authedUser === null
	};
}

export default connect(mapStateToProps)(App);
