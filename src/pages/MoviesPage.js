import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import { fetchMovies } from '../api/omdb';
import useAsync from '../hooks/useAsync';
import PageLayout from '../layout/PageLayout';
import MovieList from '../components/MovieList/MovieList';
import { ASYNC_STATES } from '../constants.js';

const { PENDING, IDLE } = ASYNC_STATES;

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const {data, status, error, run} = useAsync({
    status: search ? PENDING : IDLE,
  })

  useEffect(() => {
    if (!search) {
      return
    }
    run(fetchMovies(search))
}, [search, run])

  return (
    <PageLayout>
      <Search onValueChange={(newSearch) => setSearch(newSearch)} placeholder="type movie title..."/>
      <MovieList search={search} data={data} status={status} error={error}/>
    </PageLayout>
  );
}

export default MoviesPage;