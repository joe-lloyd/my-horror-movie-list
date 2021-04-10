import { Grid } from '@material-ui/core';
import * as React from 'react';
import MediaCard from './MeidaCard';

interface MovieListProps {
  movies: {
    data: any[];
  }
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <Grid container spacing={2}>
    {movies.data.map((movieData) => (
      <Grid item xs={12} sm={12} md={6} lg={3}>
        <MediaCard {...movieData} />
      </Grid>
    ))}
  </Grid>
);

export default MovieList;
