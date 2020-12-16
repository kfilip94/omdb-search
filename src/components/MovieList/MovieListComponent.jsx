import React from 'react';
import List from '../List/List';
import styled from "styled-components";
import { ASYNC_STATES } from '../../constants.js';

const Message = styled.div`
  font-style: italic;
  text-align: left;
`
const MovieList = ({ status, search, data, error}) => {
  const { IDLE, PENDING, REJECTED, RESOLVED } = ASYNC_STATES;

  if (status === IDLE || !search) {
    return <Message>Type a movie title to search</Message>
  } else if (status === PENDING) {
    return <Message>Loading...</Message>
  } else if (status === REJECTED) {
    return <Message>{error.message}</Message>
  } else if (status === RESOLVED) {
    return (
      <div>
        <Message>{`Results for "${search}":`}</Message>
        <List data={data}/>
      </div>
    )
  } else {
    return <Message>Oops, something went wrong...</Message>
  }
}

export default MovieList;