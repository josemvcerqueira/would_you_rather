import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../../actions/authedUser";
import { AppBar, Avatar, Tabs, NoSsr, Tab } from "@material-ui/core";
import styles from "./NavBar.module.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import { handleLocation } from "../../utils/helpers";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: deepPurple[100]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function LinkTab(props) {
  return <Tab className={styles.tab} {...props} />;
}

class NavBar extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let path = handleLocation(nextProps.location);
    if (path !== prevState.value) {
      return {
        value: path
      };
    }

    return {
      value: prevState.value
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(handleLogout(null));
  };

  render() {
    const { avatar, name, location } = this.props;
    const { value } = this.state;
    const { handleChange, handleLogout } = this;
    return (
      <MuiThemeProvider theme={theme}>
        <NoSsr>
          <div className={styles.div}>
            <AppBar className={styles.appbar} position="static">
              <Tabs
                variant="standard"
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
              >
                <LinkTab
                  className={styles.hover}
                  component={NavLink}
                  to="/"
                  label="Home"
                />
                <LinkTab
                  className={styles.hover}
                  component={NavLink}
                  to="/add"
                  label="New Question"
                />
                <LinkTab
                  className={styles.hover}
                  component={NavLink}
                  to="/leaderboard"
                  label="Leaderboard"
                />
                <Tab className={styles.name} disabled label={name} />
                <Tab
                  disabled
                  className={styles.avatar}
                  icon={<Avatar src={avatar} alt={name + " photo"} />}
                />
                <LinkTab
                  className={styles.hover}
                  to={location.pathname}
                  component={NavLink}
                  onClick={handleLogout}
                  label="Logout"
                />
              </Tabs>
            </AppBar>
          </div>
        </NoSsr>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const currentUser = users[authedUser];

  return {
    avatar: currentUser.avatarURL,
    name: currentUser.name
  };
}

NavBar.propTypes = {
  avatar: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(withRouter(NavBar));
