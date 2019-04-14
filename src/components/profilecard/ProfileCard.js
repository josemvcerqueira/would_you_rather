import React from "react";
import { Card, CardMedia, Divider, Typography } from "@material-ui/core";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ avatar = null, author, subtitle = null, children }) => {
  return (
    <Card className={styles.card}>
      <Typography
        className={styles.title}
        align="left"
        variant="h4"
        component="h1"
      >
        {author} {subtitle}
      </Typography>
      <div className={styles.cardactionarea}>
        <CardMedia
          className={styles.media}
          image={avatar}
          title="Contemplative Reptile"
        />
        <Divider className={styles.divider} variant="middle" />
        {children}
      </div>
    </Card>
  );
};

export default ProfileCard;
