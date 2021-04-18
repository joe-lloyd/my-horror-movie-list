import { Grid } from '@material-ui/core';
import * as React from 'react';
import MediaCard from './MeidaCard';

interface MovieListProps {
  api: string;
  movies: {
    data: any[];
  }
}

const MovieList: React.FC<MovieListProps> = ({ api, movies }) => (
  <Grid container spacing={2}>
    {movies.data.map(({
      image, title, rating, release, description,
    }) => (
      <Grid item key={`${title}-${release}`} xs={12} sm={6} md={4} lg={3}>
        <MediaCard
          api={api}
          image={image}
          title={title}
          rating={rating}
          release={release}
          description={description}
        />
      </Grid>
    ))}
  </Grid>
);

export default MovieList;
