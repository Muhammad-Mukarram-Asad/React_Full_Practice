import React from "react";
import "./lists.css";

import Items_List from "./Items_List";

function Lists({items,handleChange,handleDelete}) {
  return (
    <main>
      {/* Doing a prop-drilling here. we break the file in a way that the props of 
      Lists file is also sending to the Items_List file  */}
      {items.length ? (
        <Items_List 
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete} />
       
      ) : (
        <p style={{ color: "red", fontSize: "20" }}>
          No more Items Left. Your Grocery list is empty right now...
        </p>
      )}
    </main>
  );
}

export default Lists;
