import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies, searchMovies } from '../../../services/ServicesAPI';
import Loading from '../../Loading/Loading';
import ErrorComponent from '../../Error/ErrorComponent';
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
  PaginationContainer,
  PaginationButton,
} from '../MoviesStyles';
import { motion } from 'framer-motion';
const MoviesList = ({ search }) => {
  let [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(++page);
  };
  const previousPage = () => {
    setPage(--page);
  };
  const dateFormatted = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  const { data, isError, isLoading, error } = useQuery(
    search ? ['search', search, page] : ['movies', page],
    search ? () => searchMovies(search, page) : () => getMovies(page)
  );
  if (isLoading) {
    return <Loading />;
  }
  if (isError || !data.length) {
    return <ErrorComponent error={error} />;
  }
  return (
    <>
      <MovieGrid>
        {data.map(({ poster_path, vote_average, title, release_date, id }) => (
          <Movie>
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            >
              <MovieImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
                }
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
      {data.length >= 20 ? (
        <PaginationContainer>
          <PaginationButton onClick={nextPage}>Next Page</PaginationButton>
          {page > 1 ? (
            <PaginationButton onClick={previousPage}>
              Previous Page
            </PaginationButton>
          ) : (
            <span></span>
          )}
        </PaginationContainer>
      ) : (
        <span></span>
      )}
    </>
  );
};
export default MoviesList;
