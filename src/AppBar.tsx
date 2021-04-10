import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarw = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Joe's Horror Movie favourites
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarw;
