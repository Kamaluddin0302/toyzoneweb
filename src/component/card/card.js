import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HoverImage from "react-hover-image"


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    marginLeft : "12%",
    marginRight : "6%",
    marginTop: "3vh",
    position: "relative"
  },
  media: {
    height: 300,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18
  },
 

});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <HoverImage
      style={{width : '100%'}}
          src= {props.image1}
          hoverSrc={props.image2}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Educational Cow With Light And Sound
          </Typography>
          <Typography variant="body2" component="p" className={classes.cardText}>
            Rs.1,385
          </Typography>
          <Button variant="contained" color="primary" style={{backgroundColor : '#51BA72',width : 150}}>
        Add to Cart
      </Button>

        </CardContent>
      </CardActionArea>

    </Card>
  );
}