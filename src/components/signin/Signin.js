import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
		open: false,
		authedUser: ""
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleBtnClick = id => {
		this.setState(state => ({ authedUser: id }));
	};

	handleSubmit = user => {
		this.props.dispatch(handleAuthedUser(this.state.authedUser));
	};

	render() {
		const { usersArr, authedUser, location } = this.props;
		const { handleClick, state, handleBtnClick, handleSubmit } = this;
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
											handleBtnClick(user.id);
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

						{this.state.authedUser === "" ? (
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
							<Link to={`${location.pathname}`}>
								<Button
									className={styles.btn}
									variant="contained"
									onClick={handleSubmit}
								>
									<Typography
										align="center"
										variant="button"
										component="p"
										className={styles.btn__text}
									>
										Welcome {this.state.authedUser}
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
	usersArr: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withRouter(Signin));
