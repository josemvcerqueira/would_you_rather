import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleAuthedUser } from "../../actions/authedUser";
import logo from "../../assets/react-redux.png";
import {
	Avatar,
	Card,
	CardContent,
	Typography,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	List
} from "@material-ui/core";
import {
	ExpandLess,
	ExpandMore,
	SupervisedUserCircle
} from "@material-ui/icons";
import styles from "./signin.module.css";

const CardHead = () => {
	return (
		<Fragment>
			<Typography
				align="center"
				gutterBottom
				variant="h4"
				component="h1"
				className={styles.title}
			>
				Welcome to the Would You Rather Web App!
			</Typography>
			<img className={styles.img} src={logo} alt="Logo" />
			<Typography
				align="center"
				gutterBottom
				variant="h4"
				component="h2"
				className={styles.subtitle}
			>
				Sign In
			</Typography>
		</Fragment>
	);
};

class Signin extends Component {
	state = {
		open: true
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleAuthedUserClick = user => {
		this.props.dispatch(handleAuthedUser(user.id));
	};

	render() {
		const { usersArr, loading } = this.props;
		return (
			<Card className={styles.card}>
				<div className={styles.cardactionarea}>
					<CardContent>
						<CardHead />
						<ListItem button onClick={this.handleClick}>
							<ListItemIcon>
								<SupervisedUserCircle />
							</ListItemIcon>
							<ListItemText inset primary="Users" />
							{this.state.open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse
							in={this.state.open}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								{loading === true
									? null
									: usersArr.map(user => (
											<ListItem
												key={user.name}
												button
												onClick={() => {
													this.handleAuthedUserClick(
														user
													);
												}}
											>
												<Avatar
													src={user.avatarURL}
													alt={user.name + " photo"}
												/>

												<ListItemText
													inset
													primary={user.name}
												/>
											</ListItem>
									  ))}
							</List>
						</Collapse>
					</CardContent>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ users }) {
	const { cloud, lightning, lucis } = users;
	const usersArr = [cloud, lightning, lucis];
	return { usersArr, loading: usersArr[0] === undefined };
}

export default connect(mapStateToProps)(Signin);
