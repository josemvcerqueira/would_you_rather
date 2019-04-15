import React from "react";
import { connect } from "react-redux";
import { handleLogout } from "../../actions/authedUser";
import { AppBar, Avatar, Tabs, NoSsr, Tab } from "@material-ui/core";
import styles from "./NavBar.module.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

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
  return <Tab className={styles.tab} component="a" {...props} />;
}

class NavBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(handleLogout(null));
  };

  render() {
    const { value } = this.state;
    const { avatar, name } = this.props;

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
                <LinkTab label="Home" />
                <LinkTab label="New Question" />
                <LinkTab label="Leaderboard" />
                <Tab
                  disabled
                  className={styles.avatar}
                  icon={<Avatar src={avatar} alt={name + " photo"} />}
                />
                <LinkTab onClick={this.handleLogout} label="Logout" />
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

export default connect(mapStateToProps)(NavBar);
