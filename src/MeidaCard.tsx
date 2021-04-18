import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '100%',

  },
  button: {
    height: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '100%',
  },
  cardHeader: {
    width: '100%',
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

interface MediaCardProps {
  image: { url: string }[];
  title: string;
  rating: string;
  release: string;
  description: string;
  api: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  api, image, title, rating, release, description,
}) => {
  const classes = useStyles();
  const [primaryImage] = image;

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.button}>
        <CardHeader
          avatar={(
            <Avatar aria-label="recipe" className={classes.avatar}>
              {rating}
            </Avatar>
          )}
          title={title}
          subheader={release}
          className={classes.cardHeader}
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
