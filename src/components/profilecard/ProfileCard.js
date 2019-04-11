import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import styles from "./ProfileCard.module.css";

const ProfileCard = props => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <Typography
          className={styles.title}
          align="center"
          gutterBottom
          variant="h4"
          component="h1"
        >
          Lizard
        </Typography>
        <CardMedia
          className={styles.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
