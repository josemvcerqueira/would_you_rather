import React from "react";
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
					You need to head to our homepage to Sign in! Clik me
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

export default ErrorPage;
