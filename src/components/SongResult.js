import React from 'react'

const SongResult = ({ song, chooseSong }) => {
  const handlePlay = () => {
    chooseSong(song)
  }
  return (
    <div
      className='text-gray-200 py-5 flex items-center cursor-pointer'
      onClick={handlePlay}
    >
      <img src={song.albumUrl} alt='album Artwork' />
      <div className='px-5'>
        <p>{song.title}</p>
        <p className='text-gray-500'>{song.artist}</p>
      </div>
    </div>
  )
}

export default SongResult
