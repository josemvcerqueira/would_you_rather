import React, { Component } from "react";
import {
	Button,
	Divider,
	FormControl,
	Input,
	InputLabel,
	Paper,
	Typography
} from "@material-ui/core";
import styles from "./NewQuestion.module.css";

class NewQuestion extends Component {
	render() {
		return (
			<Paper className={styles.container}>
				<Typography
					align="center"
					variant="h4"
					component="h2"
					className={styles.title}
				>
					New Question
				</Typography>
				<Divider variant="middle" />
				<Typography
					align="left"
					variant="h4"
					component="h3"
					className={styles.subtitle}
				>
					Complete the question:
				</Typography>
				<Typography
					align="left"
					variant="h4"
					component="h4"
					className={styles.question}
				>
					Would You rather?
				</Typography>
				<FormControl>
					<InputLabel>Option One</InputLabel>
					<Input className={styles.input} />
				</FormControl>
				<div className={styles.relative}>
					<Divider className={styles.dividerRight} absolute={true} />
					<Typography
						align="center"
						variant="h4"
						component="h4"
						className={styles.question}
					>
						or
					</Typography>
					<Divider className={styles.dividerLeft} absolute={true} />
				</div>
				<FormControl>
					<InputLabel>Option Two</InputLabel>
					<Input className={styles.input} />
				</FormControl>
				<div className={styles.center}>
					<Button className={styles.btn} variant="contained">
						<Typography
							align="center"
							variant="button"
							component="p"
							className={styles.btn__text}
						>
							Submit
						</Typography>
					</Button>
				</div>
			</Paper>
		);
	}
}

export default NewQuestion;
