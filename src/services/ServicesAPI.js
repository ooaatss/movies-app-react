import ApiConfig from './ApiConfig';
const API_KEY = 'e340a4fe0082665c1bf2c8d085838c46';

export const getMovies = async (page = 1) => {
  const { data } = await ApiConfig.get(
    `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data.results;
};

export const getMovieById = async (id) => {
  const { data } = await ApiConfig.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
};

export const searchMovies = async (search, page = 1) => {
  const { data } = await ApiConfig.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`
  );
  return data.results;
};
