import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleAuthedUser } from "../../actions/authedUser";
import logo from "../../assets/react-redux.png";
import {
	Avatar,
	Button,
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
	Check,
	ExpandLess,
	ExpandMore,
	SupervisedUserCircle
} from "@material-ui/icons";
import styles from "./Signin.module.css";

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
				Choose a user
			</Typography>
		</Fragment>
	);
};

class Signin extends Component {
	state = {
		open: false
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleAuthedUserClick = user => {
		this.props.dispatch(handleAuthedUser(user.id));
	};

	render() {
		const { usersArr, authedUser } = this.props;
		return (
			<Card className={styles.card}>
				<div className={styles.cardactionarea}>
					<CardContent className={styles.container}>
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
								{usersArr.map(user => (
									<ListItem
										key={user.name}
										button
										onClick={() => {
											this.handleAuthedUserClick(user);
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
										{authedUser !== null &&
										authedUser === user.id ? (
											<Check className={styles.checker} />
										) : null}
									</ListItem>
								))}
							</List>
						</Collapse>
						<Button className={styles.btn} variant="contained">
							{authedUser === null
								? "Sign in"
								: `Welcome ${authedUser}`}
						</Button>
					</CardContent>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ users, authedUser }) {
	const { cloud, lightning, lucis } = users;
	const usersArr = [cloud, lightning, lucis];
	return { usersArr, authedUser };
}

export default connect(mapStateToProps)(Signin);
