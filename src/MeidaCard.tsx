import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const api = 'http://localhost:1337';

interface MediaCardProps {
  image: string[];
  title: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  image, title, rating, release, description,
}) => {
  const classes = useStyles();
  const [primaryImage] = image;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={(
            <Avatar aria-label="recipe" className={classes.avatar}>
              {rating}
            </Avatar>
          )}
          title={title}
          subheader={release}
        />
        <CardMedia
          className={classes.media}
          image={`${api}${primaryImage.url}`}
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
