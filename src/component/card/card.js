import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HoverImage from "react-hover-image"
import Image from '../../images/51_large.jpg'
import Image1 from '../../images/50_large.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin : "2vh"
  },
  media: {
    height: 300,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18
  },
 

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <HoverImage
      style={{width : '100%'}}
          src={Image}
          hoverSrc={Image1}
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
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
      </Button>

        </CardContent>
      </CardActionArea>

    </Card>
  );
}