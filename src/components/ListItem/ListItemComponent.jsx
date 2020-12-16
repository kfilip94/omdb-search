import React from 'react';
import styled from "styled-components";

const ListItem = styled.li`
  border: 2px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  margin: 4px 0;
  width: 100%;
`
const Title = styled.div`
  margin-right: 16px;
`

const Year = styled.div`
  color: gray;
`

const ListItemComponent = ({ data }) => {
  const { Title: title, Year: year } = data;
  return (
    <ListItem>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </ListItem>
  );
}

export default ListItemComponent;