import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Stars } from "@material-ui/icons";
import styles from "./LBContent.module.css";

const LBContent = ({ score, winner, questions, answers }) => {
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
              <ListItemText primary={answers} />
            </ListItem>
            <ListItem button>
              <ListItemText
                className={styles.item}
                primary="Created questions"
              />
              <ListItemText primary={questions} />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

LBContent.propTypes = {
  answers: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  winner: PropTypes.bool.isRequired
};

export default LBContent;
