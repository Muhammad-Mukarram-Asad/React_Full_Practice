import React from 'react'

function SearchItem({searchItem, setSearchItem,handleSearch}) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Want to search some item</label>
        <input
            type='text' 
            id='search'
            role='searchbox'
            placeholder='Enter Search Item:'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} />

    </form>
  )
}

export default SearchItem
