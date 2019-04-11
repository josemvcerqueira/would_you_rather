import React from "react";
import { AppBar, Tabs, NoSsr, Tab } from "@material-ui/core";
import styles from "./NavBar.module.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: deepPurple[100]
    }
  }
});

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

class NavBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={styles.navbar}>
          <AppBar className={styles.bgColor} position="static">
            <MuiThemeProvider theme={theme}>
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={this.handleChange}
                indicatorColor="secondary"
              >
                <LinkTab label="Page One" />
                <LinkTab label="Page Two" />
                <LinkTab label="Page Three" />
              </Tabs>
            </MuiThemeProvider>
          </AppBar>
        </div>
      </NoSsr>
    );
  }
}

export default NavBar;
