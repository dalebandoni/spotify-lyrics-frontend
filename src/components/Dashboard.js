import React, { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import SearchBar from './SearchBar'
import SongList from './SongList'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import Navbar from './Navbar'
import api from '../utils/axiosConfig'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  console.log(accessToken)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingSong, setPlayingSong] = useState()
  const [lyrics, setLyrics] = useState('')

  const chooseSong = song => {
    setPlayingSong(song)
    setSearch('')
    setLyrics('')
  }

  useEffect(() => {
    if (!playingSong) return

    api
      .get('/lyrics', {
        params: {
          track: playingSong.title,
          artist: playingSong.artist,
        },
      })
      .then(res => {
        console.log('lyrics are:', res.data.lyrics)
        setLyrics(res.data.lyrics)
      })
  }, [playingSong])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])
  return (
    <div className='h-screen container mx-auto w-21	flex flex-col space-y-8'>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <SongList songs={searchResults} chooseSong={chooseSong} />
      {searchResults.length === 0 && (
        <div className='text-white text-center whitespace-pre overflow-y-auto py-10'>
          {lyrics}
        </div>
      )}
      <Player accessToken={accessToken} songUri={playingSong?.uri} />
    </div>
  )
}

export default Dashboard
