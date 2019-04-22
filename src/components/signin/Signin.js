import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
				Welcome to the <br /> Would You Rather <br /> Web App!
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
		const { handleClick, state, handleAuthedUserClick } = this;
		return (
			<Card className={styles.card}>
				<div className={styles.cardactionarea}>
					<CardContent className={styles.container}>
						<CardHead />
						<ListItem
							className={styles.list}
							button
							onClick={handleClick}
						>
							<ListItemIcon>
								<SupervisedUserCircle />
							</ListItemIcon>
							<ListItemText inset primary="Users" />
							{this.state.open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={state.open} timeout="auto" unmountOnExit>
							<List
								component="div"
								disablePadding
								className={styles.list}
							>
								{usersArr.map(user => (
									<ListItem
										key={user.name}
										button
										onClick={() => {
											handleAuthedUserClick(user);
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

						{authedUser === null ? (
							<Link to={"/"}>
								<Button
									className={styles.btn}
									variant="contained"
								>
									<Typography
										align="center"
										variant="button"
										component="p"
										className={styles.btn__text}
									>
										Sign in
									</Typography>
								</Button>
							</Link>
						) : (
							<Link to={"/home"}>
								<Button
									className={styles.btn}
									variant="contained"
								>
									<Typography
										align="center"
										variant="button"
										component="p"
										className={styles.btn__text}
									>
										Welcome {authedUser}
									</Typography>
								</Button>
							</Link>
						)}
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

Signin.propTypes = {
	authedUser: PropTypes.string,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	usersArr: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Signin);
