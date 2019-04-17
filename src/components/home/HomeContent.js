import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import styles from "./HomeContent.module.css";

const HomeContent = ({ text, id, history }) => {
  const handleClick = () => {
    history.push(`/poll/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography
          className={styles.subtitle}
          align="left"
          variant="h4"
          component="h2"
        >
          Would you rather?
        </Typography>
        <Typography
          className={styles.body}
          align="center"
          variant="body2"
          component="p"
        >
          {text} <br /> or ...
        </Typography>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClick}
      >
        View Poll
      </Button>
    </div>
  );
};

export default withRouter(HomeContent);
