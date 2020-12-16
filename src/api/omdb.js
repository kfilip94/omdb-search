const API_URL = 'http://www.omdbapi.com/';

export const fetchMovies = (search) => {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY; 
  const url = `${API_URL}?apikey=${API_KEY}&s=${search}&page=1`

  return fetch(url)
    .then(async response => {
      const responseJSON = await response.json()
      const { Search: data, Error: error } = responseJSON;
      if (response.ok) {
        if (data) {
          return data;
        } else {
          return Promise.reject(new Error(error));
        }
      } else { 
        const error = {
          message: 'Something went wrong with the response, try again later'
        }
        return Promise.reject(error)
      }
    })
}