import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  MovieGrid,
  Movie,
  MovieImage,
  Review,
  InfoMovie,
  MovieTitle,
  MovieRelease,
  ViewMovieButton,
  MovieLink,
} from '../MoviesStyles';
import { motion } from 'framer-motion';
const MoviesList = ({ movies }) => {
  const dateFormatted = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  return (
    <MovieGrid>
      {movies.map(({ poster_path, vote_average, title, release_date, id }) => (
        <Movie>
          <motion.button
            whileHover={{ scale: 1.1 }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=''
            />
            <Review>{vote_average}</Review>
          </motion.button>
          <InfoMovie>
            <MovieTitle>{title}</MovieTitle>
            <MovieRelease>{`Released: ${dateFormatted(
              release_date
            )}`}</MovieRelease>
            <MovieLink to={`/movie/${id}`}>
              <ViewMovieButton>Get More Info</ViewMovieButton>
            </MovieLink>
          </InfoMovie>
        </Movie>
      ))}
    </MovieGrid>
  );
};
export default MoviesList;
