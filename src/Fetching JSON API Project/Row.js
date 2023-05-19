import React from "react";
import Cell from "./Cell";

function Row({ data }) {
  return (
    <tr>
      {Object.entries(data).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
}

export default Row;
