import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className='box pt-6 '>
      <div className='box-wrapper'>
        <div className=' bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
          <input
            type='search'
            placeholder='Search'
            x-model='q'
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent rounded'
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
