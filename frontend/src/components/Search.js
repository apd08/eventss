import React from 'react'

function Search(props) {
  return (
    <div className="search-bar">
          <input type="text" placeholder="Поиск..." onChange={props.onSearch} />
        </div>
  )
}

export default Search