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
} from './MoviesStyles';
import { Button } from '../../GlobalStyles';
const Movies = () => {
  const { data, isError, isLoading, error } = useQuery("movies", getMovies);

  console.log(data);
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
        {data.map(({poster_path, vote_average}) => (
          <Movie>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=''
            />
            <Review>{vote_average}</Review>
          </Movie>
        ))}
      </MovieGrid>
    </MovieContainer>
  );
};

export default Movies;
