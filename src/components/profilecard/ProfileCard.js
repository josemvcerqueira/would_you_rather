import React from "react";
import { Card, CardMedia, Divider, Typography } from "@material-ui/core";
import styles from "./ProfileCard.module.css";
import CardContent from "../home/CardContent";

const ProfileCard = props => {
  return (
    <Card className={styles.card}>
      <Typography
        className={styles.title}
        align="left"
        variant="h4"
        component="h1"
      >
        Lightninng Asks:
      </Typography>
      <div className={styles.cardactionarea}>
        <CardMedia
          className={styles.media}
          image="https://i.pinimg.com/originals/71/5e/20/715e2038ab819df3ead4a5cb3081b783.jpg"
          title="Contemplative Reptile"
        />
        <Divider className={styles.divider} variant="middle" />
        <CardContent />
      </div>
    </Card>
  );
};

export default ProfileCard;
