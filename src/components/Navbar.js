import React from 'react'

const Navbar = () => {
  return (
    <nav class='font-sans flex flex-col text-center text-green-400 sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-black shadow sm:items-baseline w-full'>
      <div class='sm:mb-0'>
        <a
          href='/home'
          class='text-2xl no-underline text-grey-darkest hover:text-blue-dark'
        >
          SpotifyLyrics
        </a>
      </div>
    </nav>
  )
}

export default Navbar
