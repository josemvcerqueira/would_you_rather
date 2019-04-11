import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from "./navbar/NavBar";
import Signin from "./signin/Signin";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Fragment>
				{this.props.loading === true ? null : <Signin />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	let loading = true;
	// let navbarLoading = true;
	if (users.cloud !== undefined) {
		loading = false;
	}

	// if (authedUser !== null) {
	// 	navbarLoading = false;
	// }

	return {
		loading
		// navbarLoading
	};
}

export default connect(mapStateToProps)(App);
