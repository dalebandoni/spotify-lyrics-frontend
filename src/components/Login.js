import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h1 className='mb-10 text-center text-7xl font-extrabold text-white'>
            Welcome!
          </h1>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>
            Sign in with Spotify
          </h2>
        </div>
        <div>
          <a
            href={AUTH_URL}
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <LockClosedIcon
                className='h-5 w-5 text-green-500 group-hover:text-green-400'
                aria-hidden='true'
              />
            </span>
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
