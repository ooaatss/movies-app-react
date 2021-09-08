import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovieById } from '../../../services/ServicesAPI';
import {
  SingleMovieContainer,
  ButtonBackLink,
  ButtonBack,
  MovieInfo,
  MovieImgContainer,
  MovieContent,
  MovieImg,
  Review,
  MovieTitle,
  MovieFact,
  MovieFactSpan,
} from './MovieSelectedStyles';
import Loading from '../../../components/Loading/Loading';
const MovieSelected = () => {
  const { id } = useParams();
  const { data, status, error } = useQuery(['movie', id], () =>
    getMovieById(id)
  );
  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <SingleMovieContainer>
        <ButtonBackLink to='/'>
          <ButtonBack>Back</ButtonBack>
        </ButtonBackLink>
        <MovieInfo>
          <MovieImgContainer>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.title}
            />
            <Review>{data.vote_average}</Review>
          </MovieImgContainer>
          <MovieContent>
            <MovieTitle>{data.title}</MovieTitle>
            <MovieFact>
              <MovieFactSpan>Tagline: </MovieFactSpan>
              {data.tagline}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Released: </MovieFactSpan>
              {new Date(data.release_date).toLocaleString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Duration: </MovieFactSpan>
              {data.runtime} minutes
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Genre: </MovieFactSpan>
              {data.genres
                ? data.genres.map((genre) => genre.name).join(', ')
                : 'No genres available'}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Overview: </MovieFactSpan>
              {data.overview ? data.overview : 'No overview available'}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Reneuve: </MovieFactSpan>
              {data.revenue.toLocaleString('en-us', {
                style: 'currency',
                currency: 'USD',
              })}
            </MovieFact>
          </MovieContent>
        </MovieInfo>
      </SingleMovieContainer>
    </>
  );
};

export default MovieSelected;
