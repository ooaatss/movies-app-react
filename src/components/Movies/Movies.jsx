import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../../services/ServicesAPI';
import { Helmet } from 'react-helmet';
import {
  MovieContainer,
  SearchContainer,
  InputSearch,
} from './MoviesStyles';
import { Button } from '../../GlobalStyles';
import MoviesList from './List/MoviesList';
import Loading from '../../components/Loading/Loading';
const Movies = () => {
  const [search, setSearch] = useState('');
  const { data, isError, isLoading, error } = useQuery('movies', getMovies);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error! {error}</div>;
  }
  return (
    <>
      <Helmet>
        <title>Rexty Movies Searcher | Home</title>
        <meta name="description" content="Search info of your favorite movies and TV series" />
      </Helmet>
    <MovieContainer id='movies'>
      <SearchContainer>
        <InputSearch placeholder='Search movie...' />
        <Button>Search</Button>
      </SearchContainer>
       <MoviesList movies={data} />
    </MovieContainer>
    </>
  );
};

export default Movies;
