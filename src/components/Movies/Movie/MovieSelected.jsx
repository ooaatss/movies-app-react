import { Helmet } from 'react-helmet';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovieById } from '../../../services/ServicesAPI';
import {
  SingleMovieContainer,
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
  const history = useHistory();
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
        <meta name='description' content={data.overview} />
      </Helmet>
      <SingleMovieContainer>
        <ButtonBack onClick={history.goBack}>Back</ButtonBack>
        <MovieInfo>
          <MovieImgContainer>
            <MovieImg
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
              }
              alt={data.title}
            />
            <Review>{data.vote_average}</Review>
          </MovieImgContainer>
          <MovieContent>
            <MovieTitle>{data.title}</MovieTitle>
            <MovieFact>
              <MovieFactSpan>Tagline: </MovieFactSpan>
              {data.tagline ? data.tagline : 'No tagline'}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Released: </MovieFactSpan>
              {data.release_date
                ? new Date(data.release_date).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'No released available'}
            </MovieFact>
            <MovieFact>
              <MovieFactSpan>Duration: </MovieFactSpan>
              {data.runtime ? data.runtime : 'No runtime available'} minutes
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
