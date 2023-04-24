const API_URL = 'https://api.themoviedb.org/3'
const fetchMovieApi = async (pathname, query = '') =>{
  try{
    const res = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}${query}`)
    return res.json()
  }catch (err) {
    throw new Error(err)
  }
}

const getPopularMovies = async () => {
  return  fetchMovieApi('/movie/popular',`&page=1`)
}
const getTopRatedMovies = async () => {
  return  fetchMovieApi('/movie/top_rated',`&page=1`)
}
const getCategories = async () => {
  return  fetchMovieApi('/genre/movie/list')
}
const getSingleCategory = async (genreId) => {
  return  fetchMovieApi('/discover/movie/',`&with_genres=${genreId}`)
}
const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`)
}


export {getCategories,getSingleCategory,getPopularMovies,getTopRatedMovies,getMovie}