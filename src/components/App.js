import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from "./navbar/NavBar";
// import Signin from "./signin/Signin";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Fragment>
				<NavBar />
			</Fragment>
		);
	}
}

export default connect()(App);
