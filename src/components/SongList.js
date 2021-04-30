import React from 'react'
import SongResult from './SongResult'

const SongList = ({ songs, chooseSong }) => {
  return (
    <div className='overflow-y-auto flex flex-col divide-y divide-gray-700'>
      {songs.map(song => (
        <SongResult song={song} key={song.uri} chooseSong={chooseSong} />
      ))}
    </div>
  )
}

export default SongList
