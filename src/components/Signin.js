import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/react-redux.png";
import PropTypes from "prop-types";
import {
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

const styles = {
	card: {
		maxWidth: "50vw",
		margin: "0 auto"
	},
	img: {
		maxWidth: "100%",
		height: "auto"
	},
	cardActionArea: {
		padding: "2rem"
	},
	title: {
		color: "rgb(58, 50, 118)",
		marginBottom: "2rem",
		fontWeight: "200",
		fontSize: "1.5rem"
	},
	subtitle: {
		color: "rgb(58, 50, 118)",
		fontSize: "1.5rem",
		fontWeight: "200",
		margin: "1rem"
	}
};

class Signin extends Component {
	state = {
		open: true
	};

	componentDidMount() {}

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.card}>
				<div className={classes.cardActionArea}>
					<Typography
						align="center"
						gutterBottom
						variant="h4"
						component="h1"
						className={classes.title}
					>
						Welcome to the Would You Rather Web App!
					</Typography>
					<img className={classes.img} src={logo} alt="Logo" />
					<CardContent>
						<Typography
							align="center"
							gutterBottom
							variant="h4"
							component="h2"
							className={classes.subtitle}
						>
							Sign In
						</Typography>
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
								<ListItem button className={classes.nested}>
									<ListItemText inset primary="John Doe" />
								</ListItem>
							</List>
						</Collapse>
					</CardContent>
				</div>
			</Card>
		);
	}
}

Signin.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signin);
