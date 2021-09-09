import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  MovieContainer,
  SearchContainer,
  InputSearch,
} from './MoviesStyles';
import MoviesList from './List/MoviesList';
const Movies = () => {
  const [search, setSearch] = useState('');
  const searchMoviesHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Rexty Movies Searcher | Home</title>
        <meta
          name='description'
          content='Search info of your favorite movies and TV series'
        />
      </Helmet>
      <MovieContainer id='movies'>
        <SearchContainer>
          <InputSearch
            placeholder='Search movie...'
            value={search}
            onChange={searchMoviesHandler}
          />
        </SearchContainer>
        <MoviesList search={search} key={search} />
      </MovieContainer>
    </>
  );
};

export default Movies;
