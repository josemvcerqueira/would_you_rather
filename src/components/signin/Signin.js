import React, { Component } from "react";
import styles from "./Signin.module.scss";
import logo from "../../assets/react-redux.png";

class Signin extends Component {
	render() {
		return (
			<section>
				<div className={styles.card}>
					<div>
						<h2 className={styles.title}>
							Welcome to <br />
							<strong> the Would You Rather</strong> <br /> Game!
						</h2>
						<img className={styles.logo} src={logo} alt="Logo" />
						<form className={styles.form}>
							<div>
								<input
									id="name"
									type="text"
									class="form__input"
									placeholder="Full name"
									required
								/>
								<label for="name" class="form__label">
									Full name
								</label>
							</div>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default Signin;
