import * as React from 'react';
import {
  CircularProgress, Container, createMuiTheme, MuiThemeProvider, Typography,
} from '@material-ui/core';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarw from './AppBar';
import MovieList from './MovieList';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3E0E0E',
    },
    secondary: {
      main: '#0D290C',
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

enum PAGE_STATE {
  WAITING = 'WAITING',
  ERROR = 'ERROR',
  LOADED = 'LOADED',
  LOADING = 'LOADING',
}

const Home = () => {
  const classes = useStyles();

  const [pageState, setPageState] = React.useState(PAGE_STATE.WAITING);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getMovies = async () => {
      try {
        setPageState(PAGE_STATE.LOADING);
        const moviesReq = await axios.get(process.env.MOVIE_API);
        setMovies(moviesReq);
        setPageState(PAGE_STATE.LOADED);
      } catch (error) {
        setPageState(PAGE_STATE.ERROR);
      }
    };
    getMovies();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <AppBarw />
        <Container>
          <Typography variant="h1" component="h1" gutterBottom>
            Joe's Horror Movie favourites
          </Typography>
          {pageState === PAGE_STATE.WAITING && (
          <>
            <CircularProgress />
            <h1>Waiting</h1>
          </>
          )}
          {pageState === PAGE_STATE.LOADING && (
          <>
            <CircularProgress />
            <h1>Loading</h1>
          </>
          )}
          {pageState === PAGE_STATE.LOADED && <MovieList movies={movies} />}
          {pageState === PAGE_STATE.ERROR && <h1>PAGE_STATE.ERROR</h1>}
        </Container>
      </div>
    </MuiThemeProvider>
  );
};

export default Home;
