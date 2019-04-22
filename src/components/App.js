import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import DynamicImport from "./dynamic/DynamicImport";
import LinearProgress from "@material-ui/core/LinearProgress";

const divStyle = {
	flexGrow: "1 !important"
};

const Signin = props => (
	<DynamicImport load={() => import("./signin/Signin")}>
		{Component =>
			Component === null ? (
				<div styles={divStyle}>
					<LinearProgress />
				</div>
			) : (
				<Component {...props} />
			)
		}
	</DynamicImport>
);

const Home = props => (
	<DynamicImport load={() => import("./home/Home")}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicImport>
);

const Leaderboard = props => (
	<DynamicImport load={() => import("./leaderboard/Leaderboard")}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicImport>
);

const NavBar = props => (
	<DynamicImport load={() => import("./navbar/NavBar")}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicImport>
);

const NewPoll = props => (
	<DynamicImport load={() => import("./newpoll/NewPoll")}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicImport>
);

const Poll = props => (
	<DynamicImport load={() => import("./poll/Poll")}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicImport>
);

const ErrorPage = props => (
	<DynamicImport load={() => import("./errorpage/ErrorPage")}>
		{Component =>
			Component === null ? (
				<div styles={divStyle}>
					<LinearProgress />
				</div>
			) : (
				<Component {...props} />
			)
		}
	</DynamicImport>
);

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

App.propTypes = {
	initialData: PropTypes.bool.isRequired,
	authedUser: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
