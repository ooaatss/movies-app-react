import { useQuery } from 'react-query';
import { getMovies } from '../../services/ServicesAPI';
import {
  MovieContainer,
  MovieGrid,
  Movie,
  MovieImage,
  Review,
  SearchContainer,
  InputSearch,
  InfoMovie,
  MovieTitle,
  MovieRelease,
  ViewMovieButton,
} from './MoviesStyles';
import { Button } from '../../GlobalStyles';
const Movies = () => {
  const dateFormatted = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  const { data, isError, isLoading, error } = useQuery('movies', getMovies);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error}</div>;
  }
  return (
    <MovieContainer id='movies'>
      <SearchContainer>
        <InputSearch placeholder='Search movie...' />
        <Button>Search</Button>
      </SearchContainer>
      <MovieGrid>
        {data.map(({ poster_path, vote_average, title, release_date, }) => (
          <Movie>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=''
            />
            <Review>{vote_average}</Review>
            <InfoMovie>
              <MovieTitle>{title}</MovieTitle>
              <MovieRelease>{`Released: ${dateFormatted(release_date)}`}</MovieRelease>
              <ViewMovieButton>View Movie</ViewMovieButton>
            </InfoMovie>
          </Movie>
        ))}
      </MovieGrid>
    </MovieContainer>
  );
};

export default Movies;
