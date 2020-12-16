import React from 'react';
import ListItem from '../ListItem/ListItem';

const ListComponent = ({ data }) => {
  return <li>
    {data && data.map((rowData, i) => <ListItem key={rowData.imdbID} data={rowData}/>)}
  </li>
}

export default ListComponent;