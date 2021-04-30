import React, { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

const Player = ({ accessToken, songUri }) => {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [songUri])
  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={String(accessToken)}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={songUri ? [songUri] : []}
      styles={{
        activeColor: '#fff',
        bgColor: '#000',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        sliderHandleColor: '#fff',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />
  )
}

export default Player
