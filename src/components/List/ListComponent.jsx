import React from "react";
import ListItem from "../ListItem/ListItem";

const ListComponent = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((rowData, i) => (
          <ListItem key={rowData.imdbID} data={rowData} />
        ))}
    </ul>
  );
};

export default ListComponent;
