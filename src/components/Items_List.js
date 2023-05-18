import React from 'react'
import LineItem from './LineItem';


function Items_List({items,handleChange, handleDelete}) {
  return (
    <div>
         <ul>
          {items.map((elements) => {
          return(
            <LineItem
                key={elements.id}
                element={elements}
                handleChange={handleChange}
                handleDelete={handleDelete} 
            />
          );
          })}
        </ul>
      
    </div>
  )
}

export default Items_List
