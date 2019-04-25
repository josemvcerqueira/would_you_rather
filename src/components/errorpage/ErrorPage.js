import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
	return (
		<div>
			<h1 className={styles.center}>
				<span role="img" aria-label="poop" label="poop">
					💩
				</span>
				Four oh Four oops
				<span role="img" aria-label="poop" label="poop">
					💩
				</span>
				<Typography
					className={styles.subtitle}
					align="center"
					variant="h4"
					component={Link}
					to="/"
				>
					<span
						role="img"
						aria-label="hand pointing right"
						label="hand pointing right"
					>
						👉
					</span>
					The page you are looking for does not exist. Click me to
					head to our homepage!
					<span
						role="img"
						aria-label="hand pointing left"
						label="hand pointing left"
					>
						👈
					</span>
				</Typography>
			</h1>
		</div>
	);
};

ErrorPage.propTypes = {
	history: PropTypes.object,
	location: PropTypes.object,
	match: PropTypes.object
};

export default ErrorPage;
