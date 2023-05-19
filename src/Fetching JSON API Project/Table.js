import React from "react";
import Row from "./Row";

function Table({ items }) {
  return (
    <table border={2}>
      <tbody>
        {items.map((item) => {
          return <Row key={item.id} data={item} />
        })}
      </tbody>
    </table>
  );
}

export default Table;
