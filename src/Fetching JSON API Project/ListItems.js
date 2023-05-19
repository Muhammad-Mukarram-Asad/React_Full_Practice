import React from 'react'

function ListItems({data}) {
  return (
    <li>
        {JSON.stringify(data)}
    </li>
  )
}

export default ListItems
