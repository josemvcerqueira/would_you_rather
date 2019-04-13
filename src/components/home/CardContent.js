import React from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./CardContent.module.css";

const CardContent = ({ text }) => {
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
      >
        View Poll
      </Button>
    </div>
  );
};

export default CardContent;
