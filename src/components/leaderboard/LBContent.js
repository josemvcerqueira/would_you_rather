import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Stars } from "@material-ui/icons";
import styles from "./LBContent.module.css";

const LBContent = ({ score = 10, winner = false }) => {
  return (
    <div className={styles.container}>
      {winner && <Stars className={styles.icon} />}
      <div className={styles.content}>
        <Typography
          className={styles.title}
          align="left"
          variant="h4"
          component="h2"
        >
          Score: {score}
        </Typography>
        <div className={styles.root}>
          <List component="div">
            <ListItem divider button>
              <ListItemText
                className={styles.item}
                primary="Answered questions"
              />
              <ListItemText primary="2" />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.item}
                primary="Created questions"
              />
              <ListItemText primary="3" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default LBContent;
