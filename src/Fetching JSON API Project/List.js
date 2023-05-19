import React from "react";
import ListItems from "./ListItems";

function List({ items }) {
  return (
    <div>
    <ul>
        {
            items.map((item) => {
                return(
                    <ListItems key={item.id} data={item} />
                )
            })
        }
     
    </ul>
    </div>
  );
}

export default List;
