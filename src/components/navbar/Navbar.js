import React from "react";
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

class NavBar extends React.Component {
  state = {
    value: 0
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        value: handleLocation(nextProps.location)
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(handleLogout(null));
    this.props.history.push("/");
  };

  render() {
    const { avatar, name } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <NoSsr>
          <div className={styles.div}>
            <AppBar className={styles.appbar} position="static">
              <Tabs
                variant="standard"
                value={value}
                onChange={this.handleChange}
                indicatorColor="secondary"
              >
                <LinkTab component={NavLink} to="/home" label="Home" />
                <LinkTab
                  component={NavLink}
                  to="newquestion"
                  label="New Question"
                />
                <LinkTab
                  component={NavLink}
                  to="leaderboard"
                  label="Leaderboard"
                />
                <Tab
                  disabled
                  className={styles.avatar}
                  icon={<Avatar src={avatar} alt={name + " photo"} />}
                />
                <LinkTab
                  component={NavLink}
                  to="/"
                  onClick={this.handleLogout}
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

export default connect(mapStateToProps)(withRouter(NavBar));
